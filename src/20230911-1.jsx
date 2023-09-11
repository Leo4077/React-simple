async function fetchAPI() {
    try {
        // - 發出請求
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        // - 解析結果
        const responseJson = await response.json();

        // - 印出圖片URL
        console.log(responseJson.message);
    } catch (error) {
        console.error('Error fetching the dog image:', error);
    }
}

fetchAPI();
