export type GetTrackDetailsOutputData = {
    id: string,
    attributes: {
        title: string
        lyrics: string | null
    }
}

type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            // 'api-key': '81162cf3-99f0-4cdc-a03b-9a025ed6a6ad'
        }
    }).then(res => res.json())

    return promise
}

type AttachmentDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string,
    attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            // 'api-key': '81162cf3-99f0-4cdc-a03b-9a025ed6a6ad'
        }
    }).then(res => res.json())

    return promise
}