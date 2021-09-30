import React, { memo, useEffect, useRef, useState } from 'react'
import deepEqual from 'deep-equal'
import styled from 'styled-components'
import { Icons } from 'assets'
import { R } from 'lib/utils'
import { CONFIG } from 'lib/config'
import { usePopper } from 'lib/hooks'
import { colors, stylesHelpers } from 'lib/styles'
import { EmptyAvatar, Link } from 'lib/components'
import { ResourceCellType } from '../types'
import { SchedulerSizes } from '../constants'
import { TeacherActionPopup } from './TeacherActionPopup'

type TeacherProps = ResourceCellType & ContainerStyles

type ContainerStyles = {
    canRender: boolean,
    onRendered?(): void
}

export const Teacher: React.FunctionComponent<TeacherProps> = memo(({
    data: teacher,
    canRender,
    onRendered
}) => {
    const { popperActions: { setPopperState } } = usePopper()
    const [rendered, setRendered] = useState(false)
    const avatarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (avatarRef.current) {
            setRendered(true)
        }
    }, [avatarRef.current?.clientWidth])

    useEffect(() => {
        if (avatarRef.current === null) {
            setRendered(true)
        }
    }, [avatarRef.current])

    useEffect(() => {
        if (canRender && rendered) {
            R.ifDefined(onRendered, R.call)
        }
    }, [canRender, rendered])

    return (
        <Container
            canRender={canRender && rendered}
            onClick={() => {
                setPopperState({
                    bare: true,
                    width: 240,
                    anchor: avatarRef.current,
                    triangleLeftPosition: 48,
                    actions: [
                        {
                            name: (
                                <TeacherActionPopup teacher={teacher}/>
                            )
                        }
                    ]
                })
            }}
        >
            {teacher.photoUrl && (
                <Image src={teacher.photoUrl}/>
            )}
            {!teacher.photoUrl && (
                <EmptyAvatar/>
            )}
            <TeacherInfo>
                <CustomLink link={`${CONFIG.ROSTER_URL}?teacherId=${teacher.teacherUid}`}>
                    <TeacherName ref={avatarRef}>
                        {`${teacher.firstName} ${teacher.lastName}`}
                    </TeacherName>
                </CustomLink>
                <Badges>
                    {teacher.skills?.warmup && (
                        <WarmupWrapper>
                            <Icons.Warmup
                                width={20}
                                height={20}
                            />
                        </WarmupWrapper>
                    )}
                    {teacher.skills?.oneVsOne && (
                        <Icons.OneToOne
                            width={22}
                            height={22}
                        />
                    )}
                    {teacher.skills?.vip && (
                        <VIPWrapper>
                            <Icons.Vip
                                width={34}
                                height={34}
                            />
                        </VIPWrapper>
                    )}
                </Badges>
            </TeacherInfo>
        </Container>
    )
}, (prevProps, nextProps) =>
    deepEqual(prevProps.data, nextProps.data) &&
    prevProps.canRender === nextProps.canRender
)

const Container = styled.div<ContainerStyles>`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  width: 250px;
  min-width: ${SchedulerSizes.CellWidth}px;
  transition: opacity 0.1s;
  opacity: ${({ canRender }) => canRender ? 1 : 0};
  border-right: 1px solid ${stylesHelpers.hexToRGBA(colors.table.cellBorder, 0.2)} !important;
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`

const TeacherInfo = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
`

const Badges = styled.div`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`

const WarmupWrapper = styled.div`
  margin-bottom: -2px;
`

const VIPWrapper = styled.div`
  margin-bottom: -10px;
`

const CustomLink = styled(Link)`
  width: 100%;
  text-align: left;
`

const TeacherName = styled.span``
