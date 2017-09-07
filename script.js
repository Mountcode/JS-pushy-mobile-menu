let windowWidth = window.innerWidth;

if (windowWidth <= 1000){
    function PMenu(menu){ 
        menu = document.querySelectorAll(menu)[0];
        
        let menuButton = document.createElement('div');
            menuButton.classList.add('mobile_menu_button');
            menuButton.innerHTML = 'Меню';
        
        let closer = document.createElement('li');
            closer.classList.add('closer');
            closer.innerHTML = 'Х';
        
        menu.classList.add('mobile_it');
        menu.before(menuButton);
        menu.prepend(closer);
        
        let buttons = [menuButton,closer];
        for(let button of buttons){
            button.onclick = function(){
                menu.classList.toggle('show_it');
            }
        }
        
        let allLi = menu.getElementsByTagName('li');
        
        for(let elem of allLi){
            if (elem.getElementsByTagName('li').length > 0){
                elem.classList.add('parent');
            }
        }
        
        allLi = menu.querySelectorAll('.parent');
        
        for(let parent of allLi){
            console.log(parent);
            
            parent.onclick = function(){
                
                this.getElementsByTagName('ul')[0].classList.toggle('open_it');
                
            }
        }
        

    }
    
    window.onload = function(){
        PMenu('.PMenu');
    }
}