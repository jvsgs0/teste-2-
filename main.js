//prof eu não consigui baixar no meu computador, pois falava que não podia neste dispositivo. 
//Também procurei saber sobre como comarar imagens no mobileNet, mas não achei.
//tentei de várias formas olhando os progatos anteriores, mas nada.
//o projeto agora fica pegando e repetindo o som que acontece fora do computador, mas nada de imagem já inserida. 
  //           ___
  //          |SAD|
  //      O  <|___|
  //     /|\    
  //     / \


  function setup() {
    classifier = ml5.imageClassifier('MobileNet', modeloLoaded);
    image = createCapture(IMAGE);
    image.hide();
  }
  
  function modeloLoaded()
  {
    console.log('Modelo carregado');
  }
  
  function draw()
  {
     Classifier.classify(image, gotResult);
  }
  
  var previousResult = '';
  
  function gotResult(error, results)
  {
    if (error) {
      console.error(error);
    } else {
      if ((results[0].confidence > 0.5) && (previousResult != results[0].label))
      {
        console.log(results);
        previousResult = results[0].label;
        document.getElementById("Resultado1").innerHTML = results[0].label;
      }
    }

  }
  
  
  
  