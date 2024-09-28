// 指定JSON数据的链接
const jsonUrl = 'https://example.com/data.json';

// 使用fetch API获取JSON数据
fetch(jsonUrl)
    .then(response => {
        // 确保请求成功
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析JSON数据
    })
    .then(data => {
        // 处理JSON数据
        console.log(data); // 打印数据到控制台

        // 根据JSON数据更新页面
        const writeDiv = document.getElementById('write');
        if (!writeDiv) {
            console.error('Cannot find the div with id "write"');
            return;
        }

        // 清除既有内容
        writeDiv.innerHTML = '';

        // 根据JSON数据创建页面内容
        const noticeData = data.data[Object.keys(data.data)[0]]; // 获取第一个通知的数据

        // 创建页面标题
        const titleElement = document.createElement('h1');
        titleElement.textContent = '通知';
        writeDiv.appendChild(titleElement);

        // 创建通知标题
        const dateElement = document.createElement('h2');
        dateElement.textContent = noticeData.title;
        writeDiv.appendChild(dateElement);

        // 创建对象
        const objectElement = document.createElement('p');
        objectElement.textContent = `对象：${noticeData.object}`;
        writeDiv.appendChild(objectElement);

        // 创建内容
        const contentElement = document.createElement('p');
        contentElement.textContent = `内容：${noticeData.content}`;
        writeDiv.appendChild(contentElement);
    })
    .catch(error => {
        // 处理错误
        console.error('There has been a problem with your fetch operation:', error);
    });