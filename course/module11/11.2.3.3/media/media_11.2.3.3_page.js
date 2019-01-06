function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    btnXPosArr = [20.8, 230.75, 230.75, 20.8];
    btnYPosArr = [75.5, 252.4, 75.5, 252.4];
    btnNameArr = ['btn01', 'btn04', 'btn02', 'btn03'];
    buttonArr = [];
    buttonClickArr = [];
    buttonOverArr = [];
    bubbleArr = [];
    var lastBtnClick;
    textBoxProps = ['ID_titleTxt01', 'ID_bodyTxt01', 455, 90, 200, 296];
    for (var i = 0; i < btnXPosArr.length; i++) {
        var container = new createjs.Container();
        _container.addChild(container);
        container.id = i;
        container.cursor = 'pointer';
        btn = getCJSElement('IMAGE', { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: '../../../common/images/plus_btn.png' });
        buttonArr.push(btn);
        container.addChild(btn);
        btn1 = getCJSElement('IMAGE', { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: '../../../common/images/plus_btn_over.png' });
        buttonOverArr.push(btn1);
        container.addChild(btn1);
        btn1.visible = false;
        btn2 = getCJSElement('IMAGE', { x: btnXPosArr[i] + 5, y: btnYPosArr[i] + 3, width: 35, height: 35, src: '../../../common/images/plus_btn_over2.png' });
        buttonClickArr.push(btn2);
        container.addChild(btn2);
        if(i != 0) btn2.visible = false;
        container.addEventListener('click', handlerMethod);
        container.addEventListener('mouseover', handlerOverMethod);
        container.addEventListener('mouseout', handlerOutMethod);
        var tBoxTitle = textBoxProps[0].split('0')[0] + btnNameArr[i].split('n')[1];
        var tBoxBody = textBoxProps[1].split('0')[0] + btnNameArr[i].split('n')[1];
        tBox = getCJSElement('TEXTBOX', { x: textBoxProps[2], y: textBoxProps[3], width: textBoxProps[4], height: textBoxProps[5], size: 11, titleId: tBoxTitle, bodyId: tBoxBody });
        bubbleArr[i] = tBox;
        tBox.visible = false;
        _container.addChild(tBox);
    }


    function handlerMethod(event) {
        for (var i = 0; i < btnXPosArr.length; i++) {
            bubbleArr[i].visible = false;
            buttonClickArr[i].visible = false;
        }
        if (lastBtnClick) {
            buttonOverArr[lastBtnClick.id].visible = false;
            lastBtnClick.addEventListener('mouseover', handlerOverMethod);
            lastBtnClick.addEventListener('mouseout', handlerOutMethod);
        }
        bubbleArr[event.target.id].visible = true;
        buttonClickArr[event.target.id].visible = true;
        event.target.removeEventListener('mouseover', handlerOverMethod);
        event.target.removeEventListener('mouseout', handlerOutMethod);
        lastBtnClick = event.target;
    }

    function handlerOverMethod(event) {
        buttonOverArr[event.target.id].visible = true;
    }

    function handlerOutMethod(event) {
        buttonOverArr[event.target.id].visible = false;
    }
});
