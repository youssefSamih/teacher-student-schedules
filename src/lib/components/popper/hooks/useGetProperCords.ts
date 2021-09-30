import { useResize } from 'lib/hooks'
import { PopperAnchor } from 'lib/types'

type GetProperCordsProps = {
    cords?: DOMRect,
    refWidth: number,
    refHeight: number,
    position?: PopperAnchor
}

type PopperProps = {
    cords?: DOMRect
}

export const useGetProperCords = ({
    cords,
    refHeight,
    refWidth,
    position
}: GetProperCordsProps): PopperProps => {
    const { window: { width, height } } = useResize()

    // popping modal is going to disappear on left side of window
    if (cords && (cords.x - refWidth / 2) < 0) {
        return {
            cords: DOMRect.fromRect({
                ...cords.toJSON(),
                x: 8
            })
        }
    }

    // popping modal is going to disappear on right side of window
    if (cords && (cords.x + refWidth / 2 + cords.width / 2) > width) {
        return {
            cords: DOMRect.fromRect({
                ...cords.toJSON(),
                x: width - refWidth - 8,
                y: cords.y + cords.height
            })
        }
    }

    // popping modal is going to disappear on bottom side of window
    if (cords && (cords.y + refHeight / 2 + cords.height / 2) > height) {
        return {
            cords: DOMRect.fromRect({
                ...cords.toJSON(),
                y: height - refHeight - 8
            })
        }
    }

    if (cords && position === PopperAnchor.Right) {
        return {
            cords: DOMRect.fromRect({
                ...cords?.toJSON(),
                x: cords.x + cords.width,
                y: cords.y - (refHeight / 2) + (cords.height / 2)
            })
        }
    }

    if (cords && position === PopperAnchor.Left) {
        return {
            cords: DOMRect.fromRect({
                ...cords?.toJSON(),
                x: cords.x - refWidth - cords.width,
                y: cords.y - (refHeight / 2) + (cords.height / 2)
            })
        }
    }

    if (cords && position === PopperAnchor.Top) {
        return {
            cords: DOMRect.fromRect({
                ...cords?.toJSON(),
                x: cords.x + (cords.width / 2) - refWidth / 2,
                y: cords.y - refHeight - cords.height
            })
        }
    }

    if (cords) {
        return {
            cords: DOMRect.fromRect({
                ...cords?.toJSON(),
                x: cords.x + (cords.width / 2) - refWidth / 2,
                y: cords.y + cords.height
            })
        }
    }

    return {
        cords
    }
}
