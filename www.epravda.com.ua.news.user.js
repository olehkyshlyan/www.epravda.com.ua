// ==UserScript==
// @name         Epravda | News
// @namespace    https://www.epravda.com.ua/news/
// @noframes
// @version      0.1
// @description  Epravda | www.epravda.com.ua | News
// @author       oleh.kyshlyan
// @match        http://www.epravda.com.ua/news/*
// @match        https://www.epravda.com.ua/news/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

var EpravdaNews = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
        if(body != undefined){
          body.style.backgroundColor = 'transparent';
          body.style.backgroundImage = 'none';
          body.style.backgroundRepeat = 'repeat';
          body.style.backgroundAttachment = 'scroll';
          body.style.backgroundPosition = '0% 0%';
          body.style.paddingTop = '0px';
          body.className = '';

          var bodyChildren = body.children;
          var bdChLen = bodyChildren.length;

          for(var i=0; i<bdChLen; i++){
            var bodyChild = bodyChildren[i];

            if(bodyChild.tagName == 'A' && bodyChild.id.indexOf('ar') == 0){
              bodyChild.style.display = 'none';
            }

            if(bodyChild == bodyChildren[0] && bodyChild.tagName == 'BR'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'CENTER'){
              var center = bodyChild;
              var centerChildren = center.children;
              var cntChLen = centerChildren.length;

              for(var q=0; q<cntChLen; q++){
                var cntChild = centerChildren[q];

                if(cntChild.id.indexOf('adriver') != -1){
                  bodyChild.style.display = 'none';
                  break;
                }

                if(cntChild.tagName == 'DIV'){
                  for(property of cntChild.children){
                    if(property.tagName == 'SCRIPT' && property.src.indexOf('adnet') != -1){
                      bodyChild.style.display = 'none';
                      break;
                    }
                  }
                }
              }
            }

            if(bodyChild.className.indexOf('advtext') != -1){
              bodyChild.style.display = 'none !important';
            }

            if(bodyChild.id.indexOf('mwayss') != -1){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id.indexOf('adriver') != -1){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.className.indexOf('webpush') != -1){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'IFRAME'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'IMG'){
              bodyChild.style.display = 'none';
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
          var blckPostZrElChildren = blockPostZeroEl.children;
          var bkPstZrElChLen = blckPostZrElChildren.length;

          for(var i=0; i<bkPstZrElChLen; i++){
            var bkPstChild = blckPostZrElChildren[i];

            if(bkPstChild.className == 'post__service'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.className == 'column_description'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.className == 'push'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.id.indexOf('admixer') != -1){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.tagName == 'BR'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.tagName == 'IFRAME' && bkPstChild.nextElementSibling.tagName == 'SPAN'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.tagName == 'SPAN' && bkPstChild.previousElementSibling.tagName == 'IFRAME'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.className == 'unit_article-banner'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.className == 'empty'){
              bkPstChild.style.cssText += '; display: none !important;';
            }

            if(bkPstChild.className == 'block_comments'){
              bkPstChild.style.display = 'none';
            }

            if(bkPstChild.className == 'block_other_stories'){
              bkPstChild.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(blockPostInclosure,3000);
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

        if(currEl.tagName == 'CENTER'){
          if(currEl.children[0].id == 'sticky-wrapper'){
            currEl.style.display = 'none';
          }
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
