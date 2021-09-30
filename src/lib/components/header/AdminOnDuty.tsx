import React from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'
import { CONFIG } from 'lib/config'
import { Link } from 'lib/components'
import { useAdminOnDuty, useTranslations } from 'lib/hooks'
import { Typography } from '../Typography'
import { adminOnDutyInfo } from './constants'

export const AdminOnDuty: React.FunctionComponent = () => {
    const T = useTranslations()
    const { adminOnDutyState: { currentAoD } } = useAdminOnDuty()

    return (
        <Container>
            <CustomTypography>
                {T.common.adminOnDuty}
                <Link link={`${CONFIG.FULCRUM_URL}${adminOnDutyInfo}`}>
                    <AoD>
                        {currentAoD?.firstName} {currentAoD?.lastName}
                    </AoD>
                </Link>
            </CustomTypography>
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${colors.gray.border};
`

const AoD = styled.span`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
`

const CustomTypography = styled(Typography)`
  white-space: pre-line;
  max-width: 200px;
`
