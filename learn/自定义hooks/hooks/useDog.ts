import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default function () {
    //https://dog.ceo/api/breed/pembroke/images/random
    let dogList = reactive([
        "https://images.dog.ceo/breeds/pembroke/n02113023_4211.jpg",
        "https://images.dog.ceo/breeds/pembroke/n02113023_5848.jpg",
        "https://images.dog.ceo/breeds/pembroke/n02113023_14516.jpg"
    ])

    async function addDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data)
            if (result.data.status === 'success'){
                dogList.push(result.data.message)
            }
        } catch (error) {
            alert(error)
        }  
    }

    onMounted(() => {
        addDog()
    })
    
    // 向外部提供东西
    return {dogList, addDog}
}