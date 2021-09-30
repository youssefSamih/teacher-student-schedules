import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icons } from 'assets'
import { colors } from 'lib/styles'
import { useResize } from 'lib/hooks'
import { textUtils, R } from 'lib/utils'
import { OutlinedInputCustomValue } from 'lib/types'
import { Input } from './components'
import { Typography } from '../Typography'

type OutlinedInputProps = {
    initialValue?: string,
    disabled?: boolean,
    label?: string,
    customValue?: OutlinedInputCustomValue,
    controlledValue?: string,
    rightIcon?: React.ReactNode,
    leftIcon?: React.ReactNode,
    onClick?: VoidFunction,
    onFocus?: VoidFunction,
    onBlur?: VoidFunction,
    multiline?: number,
    select?: boolean,
    withoutClear?: boolean,
    onChange?(value: string): void
}

type LabelStyles = {
    focused: boolean
}

type RightIconStyles = {
    close: boolean
}

export const OutlinedInput = React.forwardRef<HTMLInputElement, OutlinedInputProps>(({
    initialValue,
    onChange,
    label,
    rightIcon,
    onClick,
    controlledValue,
    customValue,
    onFocus,
    onBlur,
    leftIcon,
    multiline,
    withoutClear,
    disabled,
    select
}, ref) => {
    const { ref: leftIconRef, item: { width }, refresh } = useResize()
    const [ inputState, setInputState ] = useState(initialValue || '')
    const [ focused, setIsFocused ] = useState(false)
    const priorityValue = controlledValue ?? inputState

    useEffect(() => {
        if (controlledValue !== undefined) {
            setInputState(controlledValue)
        }
    }, [controlledValue])

    useEffect(() => {
        refresh()
    }, [leftIcon])

    return (
        <Container onClick={onClick}>
            <LeftIconWrapper ref={leftIconRef}>
                {leftIcon}
            </LeftIconWrapper>
            {customValue && (
                <LeftWrapper>
                    {customValue.renderSelect}
                    {customValue.renderValue}
                </LeftWrapper>
            )}
            <Input
                ref={ref}
                focused={focused}
                leftOffset={width}
                disabled={disabled}
                multiline={multiline}
                rightIcon={rightIcon}
                value={ref || customValue ? '' : priorityValue}
                placeholder={!customValue?.renderValue ? label : ''}
                onBlur={() => {
                    setIsFocused(false)
                    R.ifDefined(onBlur, R.call)
                }}
                onFocus={event => {
                    if (select) {
                        return (event.target as HTMLInputElement).blur()
                    }

                    setIsFocused(true)
                    R.ifDefined(onFocus, R.call)
                }}
                onChange={value => {
                    setInputState(value)
                    R.ifDefined(onChange, fn => fn(value))
                }}
            />
            {label && (
                <Label
                    focused={focused || inputState !== ''}
                    onClick={event => {
                        event.stopPropagation()
                    }}
                >
                    {textUtils.upperCaseFirstLetter(label)}
                </Label>
            )}
            {rightIcon && (
                <RightIconWrapper close={!withoutClear && priorityValue.length > 0}>
                    {rightIcon}
                </RightIconWrapper>
            )}
            {!withoutClear && priorityValue && (
                <CloseWrapper
                    onClick={() => {
                        setInputState('')
                        R.ifDefined(onChange, fn => fn(''))
                    }}
                >
                    <Icons.Close
                        width={16}
                        height={16}
                    />
                </CloseWrapper>
            )}
        </Container>
    )
})

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Label = styled(Typography)<LabelStyles>`
  opacity: ${props => props.focused ? 1 : 0};
  transition: opacity 0.2s;
  position: absolute;
  top: -6px;
  left: 10px;
  background-color: ${colors.white};
  padding: 0 6px;
  font-size: 12px;
  font-weight: 300;
  line-height: 12px;
`

const RightIconWrapper = styled.div<RightIconStyles>`
  position: absolute;
  right: ${props => props.close ? 38 : 10}px;
  display: flex;
`

const LeftIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
`

const LeftWrapper = styled.div`
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
`

const CloseWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  cursor: pointer;
`
