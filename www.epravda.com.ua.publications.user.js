// ==UserScript==
// @name         Epravda | Publications
// @namespace    https://www.epravda.com.ua/publications/
// @noframes
// @version      0.1
// @description  Epravda | www.epravda.com.ua | Publications
// @author       oleh.kyshlyan
// @match        http://www.epravda.com.ua/publications/*
// @match        https://www.epravda.com.ua/publications/*
// @grant        none
// ==/UserScript==

var EpravdaPublications = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var bodyCollection = document.getElementsByTagName('body');
      if(bodyCollection.length > 0){
        var body = bodyCollection[0];
        if(body != undefined){
          var bodyChildren = body.children;
          var bdChLen = bodyChildren.length;

          for(var i=0; i<bdChLen; i++){
            var currEl = bodyChildren[i];

            if(currEl.tagName == 'CENTER'){
              var centerCurrEl = currEl;
              var centerCurrElChildren = centerCurrEl.children;
              var cntrCrElChLen = centerCurrElChildren.length;

              for(var q=0; q<cntrCrElChLen; q++){
                var cntCrElChild = centerCurrElChildren[q];

                if(cntCrElChild.id.indexOf('adriver') != -1){
                  cntCrElChild.style.display = 'none';
                }
              }
            }

            if(currEl.id.indexOf('adriver') != -1){
              currEl.style.display = 'none';
            }

            if(currEl.tagName == 'IFRAME'){
              currEl.style.display = 'none';
            }

            if(currEl.tagName == 'IMG'){
              currEl.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.blockPost = function(){
    var blockPostInclosure = function(){
      var blockPostCollection = document.getElementsByClassName('block_post');
      if(blockPostCollection.length > 0){
        var blockPostZeroEl = blockPostCollection[0];
        if(blockPostZeroEl != undefined){
          var bkPostZeroElChildren = blockPostZeroEl.children;
          var bkPZrElChLen = bkPostZeroElChildren.length;

          for(var i=0; i<bkPZrElChLen; i++){
            var currEl = bkPostZeroElChildren[i];

            if(currEl.id.indexOf('admixer') != -1){
              currEl.style.display = 'none';
            }

            if(currEl.tagName == 'ASIDE' && currEl.className.indexOf('post__service') != -1){
              currEl.style.display = 'none';
            }

            if(currEl.tagName == 'IFRAME' && currEl.nextElementSibling.tagName == 'SPAN'){
              currEl.style.display = 'none';
            }

            if(currEl.tagName == 'SPAN' && currEl.previousElementSibling.tagName == 'IFRAME'){
              currEl.style.display = 'none';
            }

            if(currEl.className == 'unit_article-banner'){
              currEl.style.display = 'none';
            }

            if(currEl.className == 'empty'){
              currEl.style.display = 'none';
            }

            if(currEl.className == 'block_comments'){
              currEl.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(blockPostInclosure,3100);
  }

  this.rightArticleColumn = function(){
    var rightArticleColumnInclosure = function(){
      var rightArticleColumnCollection = document.getElementsByClassName('right_article_column');
      if(rightArticleColumnCollection.length > 0){
        var rightArticleColumn = rightArticleColumnCollection[0];
        if(rightArticleColumn != undefined){
          var rightColumnAside = rightArticleColumn.children[0];
          if(rightColumnAside != undefined){
            var rightColAsideChildren = rightColumnAside.children;
            var rghtColAsChLen = rightColAsideChildren.length;

            for(var i=0; i<rghtColAsChLen; i++){
              var currEl = rightColAsideChildren[i];

              if(currEl.id == 'article_300_banner_for_mobile'){
                currEl.style.display = 'none';
              }

              if(currEl.id.indexOf('adriver') != -1){
                currEl.style.display = 'none';
              }

              if(currEl.className.indexOf('block_columns') != -1){
                currEl.style.display = 'none';
              }

              if(currEl.className == 'block_company'){
                currEl.style.display = 'none';
              }

              if(currEl.tagName == 'BR'){
                currEl.style.display = 'none';
              }

              if(currEl.id == 'sticky-wrapper'){
                currEl.style.display = 'none';
              }
            }
          }
        }
      }
    }
    setTimeout(rightArticleColumnInclosure,3200);
  }
}

EpravdaPublications.body();
EpravdaPublications.blockPost();
EpravdaPublications.rightArticleColumn();
