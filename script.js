  function startintro() {                                                                          //Intro
    document.getElementById("introvd").play();
    document.getElementById("cliqueinicial").style.display = "none"
    document.getElementById("enchanted-text").style.display = "none"

    const video = document.getElementById("introvd")
    const paginicial = document.getElementById("paginainicio")
    video.addEventListener("ended", function() {
      video.style.display = "none"
      paginicial.style.display = "flex"
      document.getElementById("cliqueinicial").style.display = "none"
      document.getElementById("intro").style.display = "none"

    });
  }

    document.getElementById("d1").addEventListener('click', function() {                         //Sons de Transição
    document.getElementById("somtransicao1").play();
  });

  document.getElementById("d2").addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById("somtransicao2").play();
    }, 3800);
});

document.getElementById("d3").addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById("somtransicao3").play();
    }, 2000);
});

  const musica = new Audio('audio/mystical-place-relax-ambient-258070.mp3');                      //Musica de Fundo  
      musica.loop = true;

      const botao = document.getElementById('msc');
      const icon = document.getElementById('icon-musica');

      botao.addEventListener('click', () => {
        if (musica.paused) {
          musica.currentTime = 0;
          musica.play();
          icon.src = "img/Com som.png";
          icon.alt = "Pause";
        } else {
          musica.pause();
          icon.src = "img/Sem som.png";
          icon.alt = "Play";
        }
      });

  const clickSound = document.getElementById('click');                                             //Som do Botão

  const botoes = document.querySelectorAll("button");

  botoes.forEach(botao => {
      botao.addEventListener("click", () => {
          clickSound.currentTime = 0;
          clickSound.play();
      });
  });


  function paginasobremim() {
    document.getElementById("sobremim").style.display = "flex"                                     // Sobre Mim
    document.getElementById("paginainicio").style.display = "none"

    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.7)"  
  }

  function voltardosm() {
    document.getElementById("paginainicio").style.display = "flex"   
    document.getElementById("sobremim").style.display = "none"

    document.getElementById("overlay").style.backgroundColor = "rgba(255, 255, 255, 0)" 
  }

  function minhasconquistas() {
    document.getElementById("paginainicio").style.display = "none"                                  //Conquistas
    document.getElementById("minhasconquistas").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.7)"
  }

  function voltardasc() {
    document.getElementById("minhasconquistas").style.display = "none"
    document.getElementById("paginainicio").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor ="rgba(255, 255, 255, 0)"

  }

  function escolherdimensao() {                                                                     //Dimensões
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.7)"
  }

  function voltardoed() {
    document.getElementById("paginainicio").style.display = "flex"
    document.getElementById("escolherdimensao").style.display = "none"

    document.getElementById("overlay").style.backgroundColor ="rgba(255, 255, 255, 0)"
  }

  function pqmine() {                                                                              //Justificativa
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("opcoes").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.7)"
  }

  function voltardopqm() {
    document.getElementById("paginainicio").style.display = "flex"
    document.getElementById("opcoes").style.display = "none"

    document.getElementById("overlay").style.backgroundColor ="rgba(255, 255, 255, 0)"
  }

  function ativarfirst() {                                                                        //Primeiro Ano
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "none"
    document.getElementById("primeiroano").style.display = "flex"
    document.getElementById("intro1").style.display = "flex"

    const introo = document.getElementById("introo")
    introo.play();

    introo.addEventListener("ended", function() {
    document.getElementById("intro1").style.display = "none"
    document.getElementById("conteudo1").style.display = "flex" 
    document.body.style.backgroundImage = "url(https://www.gifs.nl/media/minecraft-gifs-AZKBmM.gif)"
    document.getElementById("invisivel1").style.display = "flex"
    document.getElementById("invisivel2").style.display = "flex"
    document.getElementById("invisivel3").style.display = "flex"
    document.getElementById("invisivel4").style.display = "flex"
    document.getElementById("invisivel5").style.display = "flex"
    document.getElementById("invisivel6").style.display = "flex"
    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.5)"
  });
}
    
  function voltardopa() {
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.getElementById("primeiroano").style.display = "none"
    document.getElementById("conteudo1").style.display = "none"
    document.body.style.backgroundImage = "url(https://images7.alphacoders.com/418/418742.jpg)"
    document.getElementById("invisivel1").style.display = "none"
    document.getElementById("invisivel2").style.display = "none"
    document.getElementById("invisivel3").style.display = "none"
    document.getElementById("invisivel4").style.display = "none"
    document.getElementById("invisivel5").style.display = "none"
    document.getElementById("invisivel6").style.display = "none"
    document.getElementById("introd1").style.display = "none"
  }

  function atvlupa() {
    document.getElementById("conteudo1").src = "img/lupa.png"                                      //Menu Lateral
    document.getElementById("midiach1").style.display = "flex"
    document.getElementById("midiacn1").style.display = "none"
    document.getElementById("midiamt1").style.display = "none"
    document.getElementById("midialg1").style.display = "none"
    document.getElementById("midiapv1").style.display = "none"
    document.getElementById("midiasn1").style.display = "none"
  }

  function atvpocao() {
    document.getElementById("conteudo1").src = "img/pocao.png"
    document.getElementById("midiach1").style.display = "none"
    document.getElementById("midiacn1").style.display = "flex"
    document.getElementById("midiamt1").style.display = "none"
    document.getElementById("midialg1").style.display = "none"
    document.getElementById("midiapv1").style.display = "none"
    document.getElementById("midiasn1").style.display = "none"
  }

  function atvredstone() {
    document.getElementById("conteudo1").src = "img/redstone.png"
    document.getElementById("midiach1").style.display = "none"
    document.getElementById("midiacn1").style.display = "none"
    document.getElementById("midiamt1").style.display = "flex"
    document.getElementById("midialg1").style.display = "none"
    document.getElementById("midiapv1").style.display = "none"
    document.getElementById("midiasn1").style.display = "none"
  }

  function atvlivro() {
    document.getElementById("conteudo1").src = "img/livro.png"
    document.getElementById("midiach1").style.display = "none"
    document.getElementById("midiacn1").style.display = "none"
    document.getElementById("midiamt1").style.display = "none"
    document.getElementById("midialg1").style.display = "flex"
    document.getElementById("midiapv1").style.display = "none"
    document.getElementById("midiasn1").style.display = "none"
  }

  function atvestrela() {
    document.getElementById("conteudo1").src = "img/estrela.png"
    document.getElementById("midiach1").style.display = "none"
    document.getElementById("midiacn1").style.display = "none"
    document.getElementById("midiamt1").style.display = "none"
    document.getElementById("midialg1").style.display = "none"
    document.getElementById("midiapv1").style.display = "flex"
    document.getElementById("midiasn1").style.display = "none"
  }

  function atvbau() {
    document.getElementById("conteudo1").src = "img/bau.png"
    document.getElementById("midiach1").style.display = "none"
    document.getElementById("midiacn1").style.display = "none"
    document.getElementById("midiamt1").style.display = "none"
    document.getElementById("midialg1").style.display = "none"
    document.getElementById("midiapv1").style.display = "none"
    document.getElementById("midiasn1").style.display = "flex"
  }

  function mostrari1() {
    document.getElementById("i1").style.display = "flex"
  }

  function tirari1() {
    document.getElementById("i1").style.display = "none"
  }

  function mostrari2() {
    document.getElementById("i2").style.display = "flex"
  }

  function tirari2() {
    document.getElementById("i2").style.display = "none"
  }

  function mostrari3() {
    document.getElementById("i3").style.display = "flex"
  }

  function tirari3() {
    document.getElementById("i3").style.display = "none"
  }

  function mostrari4() {
    document.getElementById("i4").style.display = "flex"
  }

  function tirari4() {
    document.getElementById("i4").style.display = "none"
  }

  function mostrari5() {
    document.getElementById("i5").style.display = "flex"
  }

  function tirari5() {
    document.getElementById("i5").style.display = "none"
  }

  function mostrari6() {
    document.getElementById("i6").style.display = "flex"
  }

  function tirari6() {
    document.getElementById("i6").style.display = "none"
  }






  function atv1ch1() {                                                                          //Toolbars  CH
    document.getElementById("atv1ch1").style.display = "flex"   
  }

  function xatv1ch1() {
    document.getElementById("atv1ch1").style.display = "none"
  }

  function atv2ch1() {                                                                          //Toolbars
    document.getElementById("atv2ch1").style.display = "flex"   
  }

  function xatv2ch1() {
    document.getElementById("atv2ch1").style.display = "none"
  }

  function atv3ch1() {                                                                          //Toolbars
    document.getElementById("atv3ch1").style.display = "flex"   
  }

  function xatv3ch1() {
    document.getElementById("atv3ch1").style.display = "none"
  }

  function atv4ch1() {                                                                          //Toolbars
    document.getElementById("atv4ch1").style.display = "flex"   
  }

  function xatv4ch1() {
    document.getElementById("atv4ch1").style.display = "none"
  }

  function atv5ch1() {                                                                          //Toolbars
    document.getElementById("atv5ch1").style.display = "flex"   
  }

  function xatv5ch1() {
    document.getElementById("atv5ch1").style.display = "none"
  }

  function atv6ch1() {                                                                          //Toolbars
    document.getElementById("atv6ch1").style.display = "flex"   
  }

  function xatv6ch1() {
    document.getElementById("atv6ch1").style.display = "none"
  }

  function atv7ch1() {                                                                          //Toolbars
    document.getElementById("atv7ch1").style.display = "flex"   
  }

  function xatv7ch1() {
    document.getElementById("atv7ch1").style.display = "none"
  }



  function atv1cn1() {                                                                          //Toolbars  CN
    document.getElementById("atv1cn1").style.display = "flex"   
  }

  function xatv1cn1() {
    document.getElementById("atv1cn1").style.display = "none"
  }

  function atv2cn1() {                                                                          //Toolbars
    document.getElementById("atv2cn1").style.display = "flex"   
  }

  function xatv2cn1() {
    document.getElementById("atv2cn1").style.display = "none"
  }

  function atv3cn1() {                                                                          //Toolbars
    document.getElementById("atv3cn1").style.display = "flex"   
  }

  function xatv3cn1() {
    document.getElementById("atv3cn1").style.display = "none"
  }

  function atv4cn1() {                                                                          //Toolbars
    document.getElementById("atv4cn1").style.display = "flex"   
  }

  function xatv4cn1() {
    document.getElementById("atv4cn1").style.display = "none"
  }

  function atv5cn1() {                                                                          //Toolbars
    document.getElementById("atv5cn1").style.display = "flex"   
  }

  function xatv5cn1() {
    document.getElementById("atv5cn1").style.display = "none"
  }

  function atv6cn1() {                                                                          //Toolbars
    document.getElementById("atv6cn1").style.display = "flex"   
  }

  function xatv6cn1() {
    document.getElementById("atv6cn1").style.display = "none"
  }

  function atv7cn1() {                                                                          //Toolbars
    document.getElementById("atv7cn1").style.display = "flex"   
  }

  function xatv7cn1() {
    document.getElementById("atv7cn1").style.display = "none"
  }



  function atv1mt1() {                                                                          //Toolbars  Math
    document.getElementById("atv1mt1").style.display = "flex"   
  }

  function xatv1mt1() {
    document.getElementById("atv1mt1").style.display = "none"
  }

  function atv2mt1() {                                                                          //Toolbars
    document.getElementById("atv2mt1").style.display = "flex"   
  }

  function xatv2mt1() {
    document.getElementById("atv2mt1").style.display = "none"
  }

  function atv3mt1() {                                                                          //Toolbars
    document.getElementById("atv3mt1").style.display = "flex"   
  }

  function xatv3mt1() {
    document.getElementById("atv3mt1").style.display = "none"
  }

  function atv4mt1() {                                                                          //Toolbars
    document.getElementById("atv4mt1").style.display = "flex"   
  }

  function xatv4mt1() {
    document.getElementById("atv4mt1").style.display = "none"
  }

  function atv5mt1() {                                                                          //Toolbars
    document.getElementById("atv5mt1").style.display = "flex"   
  }

  function xatv5mt1() {
    document.getElementById("atv5mt1").style.display = "none"
  }

  function atv6mt1() {                                                                          //Toolbars
    document.getElementById("atv6mt1").style.display = "flex"   
  }

  function xatv6mt1() {
    document.getElementById("atv6mt1").style.display = "none"
  }

  function atv7mt1() {                                                                          //Toolbars
    document.getElementById("atv7mt1").style.display = "flex"   
  }

  function xatv7mt1() {
    document.getElementById("atv7mt1").style.display = "none"
  }



  function atv1lg1() {                                                                          //Toolbars  Ling
    document.getElementById("atv1lg1").style.display = "flex"   
  }

  function xatv1lg1() {
    document.getElementById("atv1lg1").style.display = "none"
  }

  function atv2lg1() {                                                                          //Toolbars
    document.getElementById("atv2lg1").style.display = "flex"   
  }

  function xatv2lg1() {
    document.getElementById("atv2lg1").style.display = "none"
  }

  function atv3lg1() {                                                                          //Toolbars
    document.getElementById("atv3lg1").style.display = "flex"   
  }

  function xatv3lg1() {
    document.getElementById("atv3lg1").style.display = "none"
  }

  function atv4lg1() {                                                                          //Toolbars
    document.getElementById("atv4lg1").style.display = "flex"   
  }

  function xatv4lg1() {
    document.getElementById("atv4lg1").style.display = "none"
  }

  function atv5lg1() {                                                                          //Toolbars
    document.getElementById("atv5lg1").style.display = "flex"   
  }

  function xatv5lg1() {
    document.getElementById("atv5lg1").style.display = "none"
  }

  function atv6lg1() {                                                                          //Toolbars
    document.getElementById("atv6lg1").style.display = "flex"   
  }

  function xatv6lg1() {
    document.getElementById("atv6lg1").style.display = "none"
  }

  function atv7lg1() {                                                                          //Toolbars
    document.getElementById("atv7lg1").style.display = "flex"   
  }

  function xatv7lg1() {
    document.getElementById("atv7lg1").style.display = "none"
  }



  function atv1pv1() {                                                                          //Toolbars  Pro.V
    document.getElementById("atv1pv1").style.display = "flex"   
  }

  function xatv1pv1() {
    document.getElementById("atv1pv1").style.display = "none"
  }

  function atv2pv1() {                                                                          //Toolbars
    document.getElementById("atv2pv1").style.display = "flex"   
  }

  function xatv2pv1() {
    document.getElementById("atv2pv1").style.display = "none"
  }

  function atv3pv1() {                                                                          //Toolbars
    document.getElementById("atv3pv1").style.display = "flex"   
  }

  function xatv3pv1() {
    document.getElementById("atv3pv1").style.display = "none"
  }

  function atv4pv1() {                                                                          //Toolbars
    document.getElementById("atv4pv1").style.display = "flex"   
  }

  function xatv4pv1() {
    document.getElementById("atv4pv1").style.display = "none"
  }

  function atv5pv1() {                                                                          //Toolbars
    document.getElementById("atv5pv1").style.display = "flex"   
  }

  function xatv5pv1() {
    document.getElementById("atv5pv1").style.display = "none"
  }

  function atv6pv1() {                                                                          //Toolbars
    document.getElementById("atv6pv1").style.display = "flex"   
  }

  function xatv6pv1() {
    document.getElementById("atv6pv1").style.display = "none"
  }

  function atv7pv1() {                                                                          //Toolbars
    document.getElementById("atv7pv1").style.display = "flex"   
  }

  function xatv7pv1() {
    document.getElementById("atv7pv1").style.display = "none"
  }



  function atv1sn1() {                                                                          //Toolbars  SENAI
    document.getElementById("atv1sn1").style.display = "flex"   
  }

  function xatv1sn1() {
    document.getElementById("atv1sn1").style.display = "none"
  }

  function atv2sn1() {                                                                          //Toolbars
    document.getElementById("atv2sn1").style.display = "flex"   
  }

  function xatv2sn1() {
    document.getElementById("atv2sn1").style.display = "none"
  }

  function atv3sn1() {                                                                          //Toolbars
    document.getElementById("atv3sn1").style.display = "flex"   
  }

  function xatv3sn1() {
    document.getElementById("atv3sn1").style.display = "none"
  }

  function atv4sn1() {                                                                          //Toolbars
    document.getElementById("atv4sn1").style.display = "flex"   
  }

  function xatv4sn1() {
    document.getElementById("atv4sn1").style.display = "none"
  }

  function atv5sn1() {                                                                          //Toolbars
    document.getElementById("atv5sn1").style.display = "flex"   
  }

  function xatv5sn1() {
    document.getElementById("atv5sn1").style.display = "none"
  }

  function atv6sn1() {                                                                          //Toolbars
    document.getElementById("atv6sn1").style.display = "flex"   
  }

  function xatv6sn1() {
    document.getElementById("atv6sn1").style.display = "none"
  }

  function atv7sn1() {                                                                          //Toolbars
    document.getElementById("atv7sn1").style.display = "flex"   
  }

  function xatv7sn1() {
    document.getElementById("atv7sn1").style.display = "none"
  }



function ativarsecond() {                                                                        //Segundo  Ano
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "none"
    document.getElementById("segundoano").style.display = "flex"
    document.getElementById("intro2").style.display = "flex"
    document.getElementById("voltardosa").style.display = "none"

    const intron = document.getElementById("intron")
    intron.play();

    intron.addEventListener("ended", function() {
    document.getElementById("intro2").style.display = "none"
    document.body.style.backgroundImage = "url(https://tse4.mm.bing.net/th/id/OIP.GPMixuK3UsK0avPq0-l89AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3)"
    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.4)"
    document.getElementById("voltardosa").style.display = "flex"
    });
  }

  function voltardosa() {
    document.getElementById("segundoano").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.body.style.backgroundImage = "url(https://images7.alphacoders.com/418/418742.jpg)";
  }

  function ativarthird() {                                                                        //Terceiro  Ano
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "none"
    document.getElementById("terceiroano").style.display = "flex"
    document.getElementById("intro3").style.display = "flex"
    document.getElementById("voltardota").style.display = "none"

    const introe = document.getElementById("introe")
    introe.play();

    introe.addEventListener("ended", function() {
    document.getElementById("intro3").style.display = "none"
    document.body.style.backgroundImage = "url(img/backgroundtheend.jpeg)"
    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.4)"
    document.getElementById("voltardota").style.display = "flex"
    });
  }

  function voltardota() {
    document.getElementById("terceiroano").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.body.style.backgroundImage = "url(https://images7.alphacoders.com/418/418742.jpg)";
  }