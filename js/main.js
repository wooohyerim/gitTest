function talk(){
    let know = {
        "안녕하세요" : "안녕하세요, 만나서 반갑습니다👊🏻",
        "사는 곳이 어딘가요?" : "저는 경기도 화성시에 거주하고 있습니다.",
        "무엇을 하고 있나요?" : "프론트엔드개발을 위해 공부하고 있습니다.",
        "대답해 주셔서 고맙습니다" : "찾아주셔서 감사합니다🙏🏻",
        "안녕히 계세요" : "다음에 또 만나요"
    };

    let user = document.getElementById('userBox').value;
        document.getElementById('chatLog').innerHTML = user + "<br>";
        if(user in know){
            document.getElementById('chatLog').innerHTML = know[user] + "<br>";            
        }else{
            document.getElementById('chatLog').innerHTML = "죄송합니다. 다시 질문해 주세요. <br>";
        }
}