import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }
  
  :root {
  --primary: #27AE60;
  --primary50: #93D7AF;
  --secondary: #EB5757;
  --grey100: #333333;
  --grey50: #828282;
  --grey20: #E0E0E0;
  --grey0: #F5F5F5;
  --negative: #E60000;
  --warning: #FFCD07;
  --sucess: #168821;
  --information: #155BCB;
  }
  
  body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .container{
    padding: 3vh 5vw;
  }

  .btnGreen{                
    background: var(--primary);
    color: #FFF;
  }

  .btnGreen:hover{
    background: var(--primary50);
    cursor: pointer;
  }

  .productsSection{  
    margin-top: 13px;
  }

  .searchText{    
    max-width: 9ch;
  }
  
  @media (min-width: 950px) { 
    .searchText{
                max-width: 15ch;
    }
  }
  
  @media (min-width: 720px) {   
    main{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 40px;
    }

    .productsSection ul{
      flex-wrap: wrap;
      overflow-x: hidden;
      justify-content: flex-start;
      max-width: 60vw;
    }

    .productsSection ul li{
      margin: 0;
    }

    .cartSection{
      min-width: 350px;
      width: 30vw;
    }    
  }    
`;

export default GlobalStyle;
