require('dotenv').config()
import ok from './core/utils/usefulFunc'


const starter = async () => {
    const message = await ok()
    console.log(message)
}

starter()