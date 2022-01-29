import axios from "axios"

export const LISTNR_URL = 'https://listnr-database.herokuapp.com/listnr'
export const REVIEW_URL = 'https://listnr-database.herokuapp.com/review'
export const SONG_URL = 'https://listnr-database.herokuapp.com/song'

export const grabMusic = async () => {
    const res = await axios.get(LISTNR_URL)
    return res.data
}


