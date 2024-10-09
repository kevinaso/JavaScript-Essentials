var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() { 
    var newsArticles = xhr.response.newsArticles;
    var newsArticlesDiv = document.getElementById('newsArticles');
    newsArticles.forEach(function(newsArticle) {
        var newsArticleDiv = document.createElement('div');
        newsArticleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = newsArticle.title;
    
        var description = document.createElement('p');
        description.textContent = newsArticle.description;
    
        var keypointsHeader = document.createElement('h3');
        keypointsHeader.textContent = 'Keypoints:';
    
        var keypointsList = document.createElement('ul');
        
        newsArticle.key_points.forEach(function(keypoint) {
            var listItem = document.createElement('li');
            listItem.textContent = keypoint;
            keypointsList.appendChild(listItem);
        });
    
        var implicatonsHeader = document.createElement('h3');
        implicatonsHeader.textContent = 'Implications:';
    
        var implicationsList = document.createElement('ul');
        newsArticle.implications.forEach(function(implication) {
            var listItem = document.createElement('li');
            listItem.textContent = implication;
            implicationsList.appendChild(listItem);
        });
    
        newsArticleDiv.appendChild(title);
        newsArticleDiv.appendChild(description);
        newsArticleDiv.appendChild(keypointsHeader);
        newsArticleDiv.appendChild(keypointsList);
        newsArticleDiv.appendChild(implicatonsHeader);
        newsArticleDiv.appendChild(implicationsList);
    
        newsArticlesDiv.appendChild(newsArticleDiv);
          });
          
    }
    xhr.send();
    

      