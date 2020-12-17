export const getData = (keyWord) => {
    return new Promise((resolve, reject) => {
        const url = 'https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=' + keyWord
        fetch(url, {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('can not connect to service'))
            }
        }).catch(error => {
            reject(error)
        })
    })
}