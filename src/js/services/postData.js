const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });
    return res.text();
};  

export default postData; 