// ==UserScript==
// @name         Epravda | News
// @namespace    https://www.epravda.com.ua/news/
// @noframes
// @version      0.1
// @description  Epravda | www.epravda.com.ua | News
// @author       oleh.kyshlyan
// @match        http://www.epravda.com.ua/news/*
// @match        https://www.epravda.com.ua/news/*
// @grant        none
// ==/UserScript==

var EpravdaNews = new function(){

  this.body = function(){
    var bodyChildrenInclosure = function(){
      var bodyCollection = document.getElementsByTagName('body');
      var body = bodyCollection[0];
      var bodyChildren = body.children;
      var bdChLen = bodyChildren.length;

      for(var i=0; i<bdChLen; i++){
        var currEl = bodyChildren[i];

        if(currEl == bodyChildren[0] && currEl.tagName == 'BR'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'CENTER'){
          var centerTag = currEl;
          var centerTagChildren = centerTag.children;
          var cntTagChLen = centerTagChildren.length;

          for(var q=0; q<cntTagChLen; q++){
            var cntTagCurrEl = centerTagChildren[q];

            if(cntTagCurrEl.id.indexOf('adriver') != -1){
              currEl.style.display = 'none';
            }
          }
        }

        if(currEl.id.indexOf('mwayss') != -1){
          currEl.style.display = 'none';
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
    setTimeout(bodyChildrenInclosure,3000);
  }

  this.blockPost = function(){
    var blockPostCollection = document.getElementsByClassName('block_post');
    var blockPostZeroEl = blockPostCollection[0];
    var blckPostZrElChildren = blockPostZeroEl.children;
    var bkPstZrElChLen = blckPostZrElChildren.length;

    for(var i=0; i<bkPstZrElChLen; i++){
      var currEl = blckPostZrElChildren[i];

      if(currEl.className == 'post__service'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'column_description'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'push'){
        currEl.style.display = 'none';
      }

      if(currEl.id.indexOf('admixer') != -1){
        currEl.style.display = 'none';
      }

      if(currEl.tagName == 'RB'){
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
        currEl.style.cssText += '; display: none !important;';
      }

      if(currEl.className == 'block_comments'){
        currEl.style.display = 'none';
      }

      if(currEl.className == 'block_other_stories'){
        currEl.style.display = 'none';
      }
    }
  }

  this.rightColumnAside = function(){
    var rightColumnAsideCollection = document.getElementsByClassName('right_column_aside');
    var rightColAsideZeroEl = rightColumnAsideCollection[0];
    if(rightColAsideZeroEl != undefined){
      var rightColAsZeroElChildren = rightColAsideZeroEl.children;
      var rtColAsZrElChLen = rightColAsZeroElChildren.length;

      for(var i=0; i<rtColAsZrElChLen; i++){
        var currEl = rightColAsZeroElChildren[i];

        if(currEl.id == 'article_300_banner_for_mobile'){
          currEl.style.display = 'none';
        }

        if(currEl.id.indexOf('banner') != -1){
          currEl.style.display = 'none';
        }

        if(currEl.id.indexOf('adriver') != -1){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'block block_columns'){
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

  this.footer = function(){
    var footerCollection = document.getElementsByClassName('footer');
    var ftrColZeroEl = footerCollection[0];
    if(ftrColZeroEl != undefined){
      ftrColZeroEl.style.marginTop = '20px';
    }
  }
}

EpravdaNews.body();
EpravdaNews.blockPost();
EpravdaNews.rightColumnAside();
EpravdaNews.footer();
