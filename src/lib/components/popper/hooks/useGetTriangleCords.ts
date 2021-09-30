import { PopperAnchor } from 'lib/types'

type TriangleProps = {
    originalCords?: DOMRect,
    newCords?: DOMRect,
    position?: PopperAnchor
}

type TriangleCords = {
    left: number,
    top: number
}

export const useGetTriangleCords = ({
    newCords,
    originalCords,
    position
}: TriangleProps): TriangleCords => {
    if (originalCords && newCords) {
        const triangleWidth = 10
        const widthDiff = originalCords.left - newCords?.left
        const heightDiff = originalCords.top - newCords?.top

        if (position === PopperAnchor.Right) {
            return {
                left: widthDiff + originalCords.width - triangleWidth,
                top: heightDiff
            }
        }

        if (position === PopperAnchor.Left) {
            return {
                left: widthDiff - originalCords.width,
                top: heightDiff
            }
        }

        if (position === PopperAnchor.Top) {
            return {
                left: widthDiff + (originalCords.width / 2) - triangleWidth,
                top: heightDiff - triangleWidth - (originalCords.height / 2)
            }
        }

        return {
            left: widthDiff + (originalCords.width / 2) - triangleWidth,
            top: -10
        }
    }

    return {
        left: 0,
        top: 0
    }
}
