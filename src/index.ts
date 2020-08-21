require('dotenv').config()
import ok, {Data} from './core/utils/usefulFunc'

1
const starter = async () => {
    const message = await ok()
    console.log(message)
    const usefulData = Data;
}

starter()