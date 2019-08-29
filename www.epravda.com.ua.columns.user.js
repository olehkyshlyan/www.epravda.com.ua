// ==UserScript==
// @name         Epravda | Сolumns
// @namespace    https://www.epravda.com.ua/columns/
// @noframes
// @version      0.1
// @description  Epravda | www.epravda.com.ua | Сolumns
// @author       oleh.kyshlyan
// @match        http://www.epravda.com.ua/columns/*
// @match        https://www.epravda.com.ua/columns/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var EpravdaСolumns = new function(){

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

        for(property of body.children){
          if(property.tagName == 'CENTER'){
            for(subproperty of property.children){
              if(subproperty.id.indexOf('adriver') != -1){
                property.style.display = 'none';
              }
            }
          }

          if(property.tagName == 'A' && property.id.indexOf('ar') == 0){
            property.style.display = 'none';
          }

          if(property.id.indexOf('adriver') != -1){
            property.style.display = 'none';
          }

          if(property.id.indexOf('mwayss') != -1){
            property.style.display = 'none';
          }

          if(property.tagName == 'IFRAME'){
            property.style.display = 'none';
          }

          if(property.tagName == 'IMG'){
            property.style.display = 'none';
          }

          if(property.id == 'fb-root'){
            property.style.display = 'none';
          }

          if(property.id.indexOf('webpush') != -1 || property.className.indexOf('webpush') != -1){
            property.style.display = 'none';
          }

          if(property.id.indexOf('pushadv') != -1 || property.className.indexOf('pushadv') != -1){
            property.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.blockPost = function(){
    var blockPostInclosure = function(){
      jQuery(function(){
        var blockPost = jQuery("BODY > ARTICLE > DIV[class*='layout'] > DIV[class*='article_content'] DIV[class*='block_post']");
        if(blockPost.length == 1){
          blockPost.children().each(function(index,element){
            if(element.className.indexOf('post__service') != -1){
              var postComments = jQuery(element).find("DIV[class*='post__comments']");
              if(postComments.length == 1){
                postComments.hide();
              }

              var postSocialTop = jQuery(element).find("DIV[class*='post__social_top']");
              if(postSocialTop.length == 1){
                postSocialTop.hide();
              }
            }

            if(element.className.indexOf('post__service_bottom') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('admixer') != -1 || element.className.indexOf('admixer') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'BR'){
              element.style.display = 'none';
            }

            if(element.tagName == 'IFRAME' && element.nextElementSibling.tagName =='SPAN'){
              element.style.display = 'none';
              element.nextElementSibling.style.display = 'none';
            }

            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.className == 'empty'){
              element.style.display = 'none';
            }

            if(element.className == 'block_comments'){
              element.style.display = 'none';
            }

            if(element.className == 'block_other_stories'){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(blockPostInclosure,3000);
  }

  this.postText = function(){
    var postTextInclosure = function(){
      jQuery(function(){
        var postText = jQuery("BODY > ARTICLE > DIV[class*='layout'] > DIV[class*='article_content'] DIV[class*='block_post'] > DIV[class*='post__text']");
        if(postText.length == 1){
          postText.children().each(function(index,element){
            if(element.id.indexOf('ScriptRoot') != -1){
              element.style.display = 'none';
            }

            if(element.className == 'adsbygoogle'){
              element.style.display = 'none';
            }

            if(element.tagName == 'P' && element.innerHTML == ''){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(postTextInclosure,3000);
  }

  this.rightColumnAside = function(){
    var rightColumnAsideInclosure = function(){
      jQuery(function(){
        var rightColumnAside = jQuery("BODY > ARTICLE > DIV[class*='layout'] > ASIDE[class*='right_article_column'] > DIV[class*='right_column_aside']");
        if(rightColumnAside.length == 1){
          rightColumnAside.children().each(function(index,element){
            if(element.id.indexOf('banner') != -1 || element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'BR'){
              element.style.display = 'none';
            }

            if(element.id.indexOf('bn_') != -1){
              var ifrRecreativ = jQuery(element).children("IFRAME[src*='recreativ']");
              if(ifrRecreativ.length == 1){
                element.style.display = 'none';
              }
            }

            if(element.id.indexOf('sticky-wrapper') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(rightColumnAsideInclosure,3000);
  }

  this.footer = function(){
    var footerInclosure = function(){
      jQuery(function(){
        var footer = jQuery("BODY > FOOTER");
        if(footer.length == 1){
          footer.css({"margin-top":"0px"});
        }
      });
    }
    setTimeout(footerInclosure,3000);
  }

  this.onScrollCircleElements = function(){
    jQuery(function(){
      var postMenu = jQuery("BODY > DIV[class*='post__menu']");
      var postMenuOriginalClass = postMenu.attr("class");
      jQuery(window).on('scroll',function(){
        if(postMenu.length == 1){
          if(postMenu.attr("class").indexOf('fixed') != -1){
            postMenu.attr("class",postMenuOriginalClass);
          }
        }
      });
    });
  }

}

EpravdaСolumns.body();
EpravdaСolumns.blockPost();
EpravdaСolumns.postText();
EpravdaСolumns.rightColumnAside();
EpravdaСolumns.footer();
EpravdaСolumns.onScrollCircleElements();
