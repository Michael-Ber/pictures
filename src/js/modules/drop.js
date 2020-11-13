
const drop = () => {
    const inputFiles = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'drop', 'dragover'].forEach(eventName => {
        inputFiles.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0, 0, 0, .5)";
        
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";
        if(item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        }else if(item.closest('.main')) {
            item.closest('.file_upload').style.backgroundColor = "#f7e7e6";
        }else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        inputFiles.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        inputFiles.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    inputFiles.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            let arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots ='.';
            const name = arr[0] + dots + arr[1];   
            input.previousElementSibling.textContent = name;
            if(input.closest('.main')) {
                postFile(input);
            }
        });
    });

    document.querySelector('.main input').addEventListener('change', function () {postFile(this);});

    function postFile(input) {
        let formData = new FormData();
        let file = input.files[0];
        formData.append('her', file);
        fetch('assets/server.php', {
            method: 'POST',
            body: formData
        }).then(data => data.text())
        .then(data => console.log(data))
        .catch(() => console.log('error'));
    }
};

export default drop;