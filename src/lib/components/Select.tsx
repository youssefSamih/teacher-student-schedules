import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { constants } from 'common'
import { R } from 'lib/utils'
import { Undefinable, Option, OutlinedInputCustomValue } from 'lib/types'
import { colors } from '../styles'
import { FullLoader } from './Loader'
import { Typography } from './Typography'
import { useTranslations } from '../hooks'
import { OutlinedInput } from './outlinedInput'
import { ClickAwayComponent } from './ClickAwayComponent'

type SelectProps = {
    options: Array<Option>,
    label?: string,
    internalSearchLabel?: string,
    width?: number,
    multiSelect?: boolean,
    marginTop?: boolean,
    isFetching?: boolean,
    leftIcon?: React.ReactNode,
    withInternalSearch?: boolean,
    withoutClear?: boolean,
    disabled?: boolean,
    rightIcon?: React.ReactNode,
    customValue?: OutlinedInputCustomValue,
    selected?: Array<Undefinable<number | string>>,
    onChange?(options: Array<Option>): void,
    renderCustomRow?(option: Option): React.ReactNode
}

type OptionsWrapperStyle = {
    isOpen: boolean,
    withInternalSearch?: boolean
}

type ContainerStyles = {
    marginTop?: boolean,
    customWidth?: number
}

type OptionStyles = {
    disabled?: boolean
}

export const Select: React.FunctionComponent<SelectProps> = ({
    options,
    label,
    internalSearchLabel,
    width,
    multiSelect,
    marginTop,
    leftIcon,
    withInternalSearch,
    customValue,
    renderCustomRow,
    onChange,
    withoutClear = true,
    selected,
    isFetching,
    disabled,
    rightIcon
}) => {
    const T = useTranslations()
    const [ isOpen, setIsOpen ] = useState(false)
    const [ internalSearch, setInternalSearch ] = useState('')
    const selectedOptions = (selected || []).filter(selectedElement => selectedElement !== undefined)
    const value = options
        .filter(item => selectedOptions.includes(item.value))
        .reduce((acc, item, index) => {
            if (index === 0) {
                return item.label
            }

            return `${acc}, ${item.label}`
        }, '')
    const filteredOptions = options
        .filter(option => option.label.toLowerCase().includes(internalSearch.toLowerCase()))

    return (
        <Fragment>
            <ClickAwayComponent onClickOutside={() => setIsOpen(false)}>
                {isOpen && (
                    <BackDrop onClick={() => setIsOpen(false)}/>
                )}
                <Container
                    customWidth={width}
                    marginTop={marginTop}
                >
                    {isFetching && (
                        <FullLoader/>
                    )}
                    <OutlinedInput
                        select
                        label={label}
                        leftIcon={leftIcon}
                        controlledValue={value}
                        customValue={customValue}
                        withoutClear={withoutClear}
                        onFocus={() => setIsOpen(true)}
                        onClick={() => !disabled && setIsOpen(true)}
                        rightIcon={rightIcon || (
                            <Icons.ArrowDown
                                width={18}
                                height={18}
                            />
                        )}
                        onChange={value => {
                            if (value === '') {
                                R.ifDefined(onChange, fn => fn(undefined))
                            }
                        }}
                    />
                    <OptionsWrapper
                        isOpen={isOpen}
                        withInternalSearch={withInternalSearch}
                    >
                        <InnerOptionsWrapper withInternalSearch={withInternalSearch}>
                            {withInternalSearch && (
                                <OutlinedInput
                                    label={internalSearchLabel || T.common.search}
                                    leftIcon={<Icons.Search/>}
                                    onChange={setInternalSearch}
                                    controlledValue={internalSearch}
                                />
                            )}
                            {filteredOptions.length === 0 && (
                                <NoData>
                                    {T.common.noData}
                                </NoData>
                            )}
                            <ScrollView>
                                {filteredOptions.map(option => {
                                    const isSelected = selectedOptions.includes(option.value)

                                    return (
                                        <OptionItem
                                            key={option.value}
                                            disabled={option.disabled}
                                            onClick={() => {
                                                if (option.disabled) {
                                                    return
                                                }

                                                setInternalSearch('')

                                                if (!multiSelect) {
                                                    setIsOpen(false)

                                                    return R.ifDefined(onChange, fn => fn([option]))
                                                }

                                                if (multiSelect) {
                                                    return R.ifDefined(onChange, fn => fn([option]))
                                                }

                                                if (isSelected) {
                                                    return R.ifDefined(onChange, fn => fn(selectedOptions.filter(item => item !== option.value)))
                                                }

                                                return
                                            }}
                                        >
                                            {!renderCustomRow && option.label}
                                            {renderCustomRow && renderCustomRow(option)}
                                            {isSelected && (
                                                <IsSelected>
                                                    <Icons.Check fill={colors.success}/>
                                                </IsSelected>
                                            )}
                                        </OptionItem>
                                    )
                                })}
                            </ScrollView>
                        </InnerOptionsWrapper>
                        <Triangle/>
                    </OptionsWrapper>
                </Container>
            </ClickAwayComponent>
        </Fragment>
    )
}

const Container = styled.div<ContainerStyles>`
  cursor: pointer;
  position: relative;
  width: ${props => props.customWidth}px;
  margin-top: ${props => props.marginTop ? 22 : 0}px;
`

const OptionsWrapper = styled.div<OptionsWrapperStyle>`
  position: absolute;
  z-index: 100;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  background-color: ${colors.white};
  flex-direction: column;
  width: 100%;
  border-radius: 18px;
  box-shadow: ${constants.POPPER_BOX_SHADOW};
  padding: 16px;
  min-width: 250px;
`

const InnerOptionsWrapper = styled.div<Partial<OptionsWrapperStyle>>`
  z-index: 200;
  > div:first-child {
    margin-bottom: ${props => props.withInternalSearch ? 10 : 0}px;
  }
  > div:last-child {
    border-bottom: none;
    > div:last-child {
      border-bottom: none;
    }
  }
`

const OptionItem = styled(Typography)<OptionStyles>`
  position: relative;
  border-bottom: 1px solid ${colors.gray.border};
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.disabled ? colors.gray.border : ''};
  cursor: ${props => props.disabled ? 'initial' : ''};
  :hover {
    background-color: ${colors.gray.border};
  }
`

const IsSelected = styled.div`
  position: absolute;
  display: flex;
  right: 8px;
`

const NoData = styled.div``

const Triangle = styled.label`
  position: absolute;
  top: -10px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${colors.white};
`

const BackDrop = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vw;
  left: 0;
  top: 0;
  cursor: initial;
`

const ScrollView = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`
