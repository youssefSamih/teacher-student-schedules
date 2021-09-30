import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'lib/hooks'
import { colors } from 'lib/styles'
import { SchedulerType } from './types'
import { SchedulerSizes } from '../../constants'

type DataCellProps = {
    data: SchedulerType,
    isFree: boolean,
    isBusy: boolean,
    canRender: boolean
}

type DisableDateProps = {
    isBusy?: boolean,
    canRender: boolean
}

export const DataCell: React.FunctionComponent<DataCellProps> = memo(({
    isBusy = true,
    canRender
}) => {
    const T = useTranslations()
    const localRef = useRef<HTMLDivElement>(null)
    const [ render, setRender ] = useState(false)

    useEffect(() => {
        if (localRef.current && localRef.current?.clientWidth > 100) {
            setRender(true)
        }
    }, [localRef.current?.clientWidth])

    return (
        <DisableDate
            ref={localRef}
            isBusy={isBusy}
            canRender={canRender && render}
        >
            {!isBusy && (
                <CellText>
                    {T.adminka.scheduler.cell.clickToAdd}
                </CellText>
            )}
        </DisableDate>
    )
}, (prevProps, nextProps) =>
    prevProps.isBusy === nextProps.isBusy &&
    prevProps.canRender === nextProps.canRender
)

const DisableDate = styled.div<DisableDateProps>`
  background-color: ${({ isBusy }) => !isBusy ? colors.white : colors.table.background};
  min-width: ${SchedulerSizes.CellWidth}px;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-right: 1px solid ${colors.table.dataCellBorder} !important;
  border-bottom: 1px solid ${colors.table.dataCellBorder} !important;
  transition: opacity 0.1s;
  opacity: ${props => props.canRender ? 1 : 0};
`

export const CellText = styled.p`
  height: 100%;
  padding: 1rem;
  margin: 0;
  display: none;
  position: relative;
  width: 100%;
  text-align: center;
  color: ${colors.cellText};
`
