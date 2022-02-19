document.getElementById('border').addEventListener('click',function(){
    const friendContainer=document.getElementById('frind-container');
    friendContainer.style.border='1px solid red';
})
// backgroun
document.getElementById('backgroun').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background='green'
    }
})
// addItem
document.getElementById('addItem').addEventListener('click',function(){
    const friendContainer=document.getElementById('frind-container');
    const friends=document.createElement('div');
    friends.classList.add('friend');
    friends.innerHTML=`
               <h4 class="friend-name">friend-1</h4>
                <p>Lorem, ipsum.</p>
    `;
    friendContainer.appendChild(friends);
})