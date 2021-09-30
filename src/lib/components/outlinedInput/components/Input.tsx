import React from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { textUtils } from 'lib/utils'

type InputProps = {
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    onBlur?: VoidFunction,
    focused?: boolean,
    leftOffset?: number,
    multiline?: number,
    rightIcon?: React.ReactNode,
    onFocus(event: React.FocusEvent): void,
    onChange(value: string): void
}

type InputElStyles = {
    focused?: boolean,
    rightIcon?: boolean,
    leftOffset?: number,
    close?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    value,
    onChange,
    placeholder,
    onBlur,
    onFocus,
    focused,
    rightIcon,
    leftOffset,
    multiline,
    disabled
}, ref) => !multiline ? (
    <GenericInput
        ref={ref}
        value={value}
        onBlur={onBlur}
        focused={focused}
        onFocus={onFocus}
        disabled={disabled}
        close={Boolean(value)}
        leftOffset={leftOffset}
        rightIcon={Boolean(rightIcon)}
        placeholder={textUtils.upperCaseFirstLetter(placeholder)}
        onChange={({ target }) => onChange(target.value)}
    />
) : (
    <GenericTextArea
        // type is the same but typescript wants textarea
        // @ts-ignore
        ref={ref}
        value={value}
        onBlur={onBlur}
        rows={multiline}
        focused={focused}
        onFocus={onFocus}
        disabled={disabled}
        close={Boolean(value)}
        leftOffset={leftOffset}
        rightIcon={Boolean(rightIcon)}
        placeholder={textUtils.upperCaseFirstLetter(placeholder)}
        onChange={({ target }) => onChange(target.value)}
    />
))

export const GenericInput = styled.input<InputElStyles>`
  width: 100%;
  padding: ${props => {
        const leftOffset = props.leftOffset
            ? props.leftOffset + 15
            : 15
        const rightOffset = props.rightIcon
            ? 38
            : 15
        // 18px - icon width + 10px offset
        const correctRightOffset = props.close
            ? rightOffset + 28
            : rightOffset

        return `15px ${correctRightOffset}px 15px ${leftOffset}px`
    }};
  font-size: 14px;
  color: ${colors.typography};
  line-height: 16px;
  outline: none;
  border: 1px solid ${colors.gray.border};
  border-radius: 4px;
  ::placeholder {
    opacity: ${props => props.focused ? 0 : 1};
    transition: opacity 0.2s;
    font-weight: 300;
  }
`

export const GenericTextArea = styled.textarea<InputElStyles>`
  width: 100%;
  padding: ${props => {
        const leftOffset = props.leftOffset
            ? props.leftOffset + 15
            : 15
        const rightOffset = props.rightIcon
            ? 38
            : 15
        const correctRightOffset = props.close
            // 18px - icon width + 10px offset
            ? rightOffset + 28
            : rightOffset

        return `15px ${correctRightOffset}px 15px ${leftOffset}px`
    }};
  font-size: 14px;
  color: ${colors.typography};
  line-height: 16px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid ${colors.gray.border};
  border-radius: 4px;
  ::placeholder {
    opacity: ${props => props.focused ? 0 : 1};
    transition: opacity 0.2s;
    font-weight: 300;
  }
  resize: none;
`
