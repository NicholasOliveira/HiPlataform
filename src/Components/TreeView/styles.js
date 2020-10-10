import styled from 'styled-components';

export const Container = styled.ul`

ul{
  list-style: none;
  opacity: 1;
  visibility: visible;
  padding: 0px;
  margin: 0px;
  margin-left: 20px;
}
.close ul li{
  width: 0px;
  padding: 0px;
  margin: 0px;
  transition: all 0.5s ease - out;
  opacity: 0;
  height: 0;
  overflow: hidden;

}
li{
  visibility: visible;
  opacity: 1;
  list-style: none;
  transition: all 0.5s ease-out;
}
ul li div{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 10px;
  width: 450px;
}
li div div{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
li div div:hover{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  max-width: 400px;
}

ul li div:hover{
  background-color: rgb(233, 237, 237);
  padding: 7px 10px;
}
ul li div svg, li div svg{
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.2s;
  color: darkcyan;
  transform: rotate(180deg);
}
.close ul li div svg, .close div svg{
  transform: rotate(0deg);
  transition: all 0.2s;
  color: rgb(22, 23, 23);
}
ul li div svg:hover{
  color: darkcyan;
}
button{
  background-color: none;
  border: 0;
  outline: 0;
  margin-left: 10px;
  cursor: pointer;
}`;