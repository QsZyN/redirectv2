var url = window.location.href.replace('https://qszyn.github.io/redirectv2', '');
if (url === '' || url === '/') {
    url = "https://github.com/QsZyN/redirectv2";  
}else{
    url = url.replace(/^\//, '');
}
location.replace(url);
