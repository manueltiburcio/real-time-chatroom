const chatroom = new Chatroom('general', 'shaun');

chatroom.getChats((data) => {
    console.log(data);
});
