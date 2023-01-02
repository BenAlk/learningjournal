import { recentPosts } from './data.js'

document.getElementById('view-more-btn').addEventListener('click', showHidden)

function showHidden() {
    const removeHiddenEl = document.getElementsByClassName('hidden')
    const removeHiddenMediumEl = document.getElementsByClassName('hidden-medium')
    
    while (removeHiddenEl[0]) {
        removeHiddenEl[0].classList.remove('hidden')
    }

    while (removeHiddenMediumEl[0]) {
        removeHiddenMediumEl[0].classList.remove('hidden-medium')
    }

    document.getElementById('view-more').classList.add('hidden')
}

function getRecentPosts() {
    let recentPostsHtml = ``
    const mediaQuerySmall = window.matchMedia('(max-width: 637px)')
    const mediaQueryMedium = window.matchMedia('(max-width: 767px)')
    
    recentPosts.forEach(function (post) {
        const hiddenTemplate = `
    <div class="blog-container hidden">
        <img class="blog-image" src="${post.image}" alt="laptop with text">
        <p class="blog-date">${post.date}</p>
        <h2 class="blog-title">${post.title}</h2>
        <p class="blog-body">${post.body}</p>
    </div>
        `
    
    const hiddenMediumTemplate =  `
    <div class="blog-container hidden-medium" >
        <img class="blog-image" src="${post.image}" alt="laptop with text">
        <p class="blog-date">${post.date}</p>
        <h2 class="blog-title">${post.title}</h2>
        <p class="blog-body">${post.body}</p>
    </div>
        `

    const nonHiddenTemplate = `
    <div class="blog-container">
        <img class="blog-image" src="${post.image}" alt="laptop with text">
        <p class="blog-date">${post.date}</p>
        <h2 class="blog-title">${post.title}</h2>
        <p class="blog-body">${post.body}</p>
    </div>
    `
        if (mediaQuerySmall.matches) {
            if (post.post === 4) {
                recentPostsHtml += hiddenMediumTemplate
            }
            else if (post.post > 3) {
                recentPostsHtml += hiddenTemplate
            }
            else  {
                recentPostsHtml += nonHiddenTemplate
            }    
        }
        else if (mediaQueryMedium.matches) {
            if (post.post === 4) {
                recentPostsHtml += hiddenMediumTemplate
            }
            else if (post.post > 4) {
                recentPostsHtml += hiddenTemplate
            }
            else {
                recentPostsHtml += nonHiddenTemplate
            }
        }
        else  {
            recentPostsHtml += nonHiddenTemplate
        }
    })
    return recentPostsHtml
}

function render() {
    document.getElementById('blog').innerHTML = getRecentPosts()
}

render()