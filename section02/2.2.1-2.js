// 터미널에서 yarn add axios 해서 설치하고 아래 코드로 하면 확장자를 html에서 js로 바꿀 수 있다.

import axios from 'axios';  // yarn add axios

setImmediate(async () => {
    try {
        const result = await axios.get('https://www.zerocho.com/api/get');
        console.log(result);
        console.log(result.data);   // {}
    } catch (error) {
        console.error(error);
    }
});