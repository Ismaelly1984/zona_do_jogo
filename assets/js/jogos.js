/**
 * Zona do Jogo - Script de Jogos
 * Responsável por carregar e gerenciar os jogos na página individual.
 */

// Espera o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o parâmetro do jogo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const jogoParam = urlParams.get('jogo');
    
    // Elementos da página
    const jogoTitulo = document.getElementById('jogo-titulo');
    const jogoArea = document.getElementById('jogo-area');
    const jogoInstrucoes = document.getElementById('jogo-instrucoes');
    
    // Informações dos jogos disponíveis
    const jogos = {
        'snake': {
            titulo: 'Snake',
            instrucoes: 'Use as setas do teclado para controlar a cobra. Coma as frutas vermelhas para crescer e ganhar pontos. Evite colidir com as paredes ou com o próprio corpo da cobra. O jogo termina quando você colide.',
            carregarJogo: carregarSnake
        },
        'flappy': {
            titulo: 'Flappy Bird',
            instrucoes: 'Clique na tela ou pressione a barra de espaço para fazer o pássaro voar. Evite colidir com os canos verdes. Cada cano ultrapassado vale um ponto. O jogo termina quando você colide com um cano ou com o chão.',
            carregarJogo: carregarFlappy
        },
        'tetris': {
            titulo: 'Tetris',
            instrucoes: 'Use as setas do teclado para mover as peças. Seta para cima rotaciona a peça. Seta para baixo acelera a queda. Complete linhas horizontais para ganhar pontos e removê-las do jogo. O jogo termina quando as peças atingem o topo da tela.',
            carregarJogo: carregarTetris
        },
        'space': {
            titulo: 'Space Shooter',
            instrucoes: 'Use as setas do teclado para mover a nave. Pressione a barra de espaço para atirar. Destrua os inimigos para ganhar pontos. Evite colidir com os inimigos ou seus projéteis. O jogo termina quando você perde todas as vidas.',
            carregarJogo: carregarSpaceShooter
        },
        'memory': {
            titulo: 'Memory Game',
            instrucoes: 'Clique nas cartas para virá-las. Encontre todos os pares de cartas iguais. O jogo termina quando todos os pares são encontrados. Tente completar o jogo no menor número de tentativas possível.',
            carregarJogo: carregarMemoryGame
        },
        'asteroid': {
            titulo: 'Asteroid Blaster',
            instrucoes: 'Use as setas do teclado para mover a nave. Pressione a barra de espaço para atirar. Destrua os asteroides para ganhar pontos. Cuidado com os asteroides maiores que se quebram em pedaços menores. O jogo termina quando você perde todas as vidas.',
            carregarJogo: carregarAsteroidBlaster
        }
    };
    
    // Verifica se o jogo existe e carrega
    if (jogoParam && jogos[jogoParam]) {
        const jogo = jogos[jogoParam];
        
        // Atualiza o título da página
        document.title = `${jogo.titulo} - Zona do Jogo`;
        
        // Atualiza os elementos da página
        jogoTitulo.textContent = jogo.titulo;
        jogoInstrucoes.textContent = jogo.instrucoes;
        
        // Carrega o jogo
        jogo.carregarJogo();
    } else {
        // Jogo não encontrado
        jogoTitulo.textContent = 'Jogo não encontrado';
        jogoInstrucoes.textContent = 'O jogo solicitado não está disponível. Por favor, escolha outro jogo da nossa galeria.';
        jogoArea.innerHTML = '<div class="jogo-erro">Jogo não encontrado</div>';
    }
    
    // Funções para carregar os jogos
    function carregarSnake() {
        // Cria o canvas para o jogo
        jogoArea.innerHTML = '<canvas id="snake-canvas" class="jogo-canvas" width="600" height="400"></canvas>';
        
        // Obtém o contexto do canvas
        const canvas = document.getElementById('snake-canvas');
        const ctx = canvas.getContext('2d');
        
        // Configurações do jogo
        const box = 20;
        let score = 0;
        let snake = [];
        snake[0] = { x: 10 * box, y: 10 * box };
        
        let food = {
            x: Math.floor(Math.random() * 29 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
        
        let direction = "";
        
        // Controles
        document.addEventListener('keydown', update);
        
        function update(event) {
            if (event.keyCode == 37 && direction != "right") direction = "left";
            if (event.keyCode == 38 && direction != "down") direction = "up";
            if (event.keyCode == 39 && direction != "left") direction = "right";
            if (event.keyCode == 40 && direction != "up") direction = "down";
        }
        
        // Função para desenhar o jogo
        function draw() {
            // Limpa o canvas
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Desenha a cobra
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = (i == 0) ? "#2ecc71" : "#27ae60";
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
                
                ctx.strokeStyle = "#000";
                ctx.strokeRect(snake[i].x, snake[i].y, box, box);
            }
            
            // Desenha a comida
            ctx.fillStyle = "#e74c3c";
            ctx.fillRect(food.x, food.y, box, box);
            
            // Desenha a pontuação
            ctx.fillStyle = "#fff";
            ctx.font = "20px 'Press Start 2P'";
            ctx.fillText("Score: " + score, 20, 30);
            
            // Posição antiga da cabeça
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;
            
            // Atualiza a posição da cobra baseado na direção
            if (direction == "left") snakeX -= box;
            if (direction == "up") snakeY -= box;
            if (direction == "right") snakeX += box;
            if (direction == "down") snakeY += box;
            
            // Verifica se a cobra comeu a comida
            if (snakeX == food.x && snakeY == food.y) {
                score++;
                food = {
                    x: Math.floor(Math.random() * 29 + 1) * box,
                    y: Math.floor(Math.random() * 19 + 1) * box
                };
            } else {
                // Remove a cauda
                snake.pop();
            }
            
            // Nova cabeça
            let newHead = {
                x: snakeX,
                y: snakeY
            };
            
            // Verifica colisão com as paredes
            if (snakeX < 0 || snakeX > 29 * box || snakeY < 0 || snakeY > 19 * box) {
                clearInterval(game);
                gameOver();
            }
            
            // Verifica colisão com o corpo
            for (let i = 1; i < snake.length; i++) {
                if (snakeX == snake[i].x && snakeY == snake[i].y) {
                    clearInterval(game);
                    gameOver();
                }
            }
            
            // Adiciona nova cabeça
            snake.unshift(newHead);
        }
        
        // Função de game over
        function gameOver() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#fff";
            ctx.font = "30px 'Press Start 2P'";
            ctx.fillText("GAME OVER", canvas.width / 2 - 150, canvas.height / 2);
            
            ctx.font = "20px 'Press Start 2P'";
            ctx.fillText("Score: " + score, canvas.width / 2 - 80, canvas.height / 2 + 40);
            
            ctx.font = "16px 'Press Start 2P'";
            ctx.fillText("Pressione F5 para jogar novamente", canvas.width / 2 - 250, canvas.height / 2 + 80);
        }
        
        // Inicia o jogo
        let game = setInterval(draw, 100);
    }
    
    function carregarFlappy() {
        // Cria o canvas para o jogo
        jogoArea.innerHTML = '<canvas id="flappy-canvas" class="jogo-canvas" width="600" height="400"></canvas>';
        
        // Obtém o contexto do canvas
        const canvas = document.getElementById('flappy-canvas');
        const ctx = canvas.getContext('2d');
        
        // Configurações do jogo
        let score = 0;
        let frames = 0;
        
        // Imagens
        const bird = {
            x: 50,
            y: 150,
            width: 34,
            height: 24,
            gravity: 0.25,
            velocity: 0,
            jump: 4.6,
            
            draw: function() {
                ctx.fillStyle = "#f1c40f";
                ctx.fillRect(this.x, this.y, this.width, this.height);
                
                ctx.strokeStyle = "#000";
                ctx.strokeRect(this.x, this.y, this.width, this.height);
            },
            
            update: function() {
                this.velocity += this.gravity;
                this.y += this.velocity;
                
                if (this.y + this.height >= canvas.height - ground.height) {
                    this.y = canvas.height - ground.height - this.height;
                    gameOver();
                }
            },
            
            jump: function() {
                this.velocity = -this.jump;
            }
        };
        
        const pipes = {
            position: [],
            gap: 120,
            maxYPos: -150,
            
            draw: function() {
                for (let i = 0; i < this.position.length; i++) {
                    let p = this.position[i];
                    
                    // Cano superior
                    ctx.fillStyle = "#2ecc71";
                    ctx.fillRect(p.x, p.y, p.width, p.height);
                    
                    ctx.strokeStyle = "#000";
                    ctx.strokeRect(p.x, p.y, p.width, p.height);
                    
                    // Cano inferior
                    ctx.fillStyle = "#2ecc71";
                    ctx.fillRect(p.x, p.y + p.height + this.gap, p.width, canvas.height - (p.y + p.height + this.gap) - ground.height);
                    
                    ctx.strokeStyle = "#000";
                    ctx.strokeRect(p.x, p.y + p.height + this.gap, p.width, canvas.height - (p.y + p.height + this.gap) - ground.height);
                }
            },
            
            update: function() {
                if (frames % 100 == 0) {
                    this.position.push({
                        x: canvas.width,
                        y: this.maxYPos * (Math.random() + 1),
                        width: 50,
                        height: 300
                    });
                }
                
                for (let i = 0; i < this.position.length; i++) {
                    let p = this.position[i];
                    p.x -= 2;
                    
                    // Verifica colisão
                    if (
                        bird.x + bird.width > p.x &&
                        bird.x < p.x + p.width &&
                        (
                            bird.y < p.y + p.height ||
                            bird.y + bird.height > p.y + p.height + this.gap
                        )
                    ) {
                        gameOver();
                    }
                    
                    // Incrementa pontuação
                    if (p.x + p.width < bird.x && !p.passed) {
                        score++;
                        p.passed = true;
                    }
                    
                    // Remove canos fora da tela
                    if (p.x + p.width <= 0) {
                        this.position.shift();
                    }
                }
            }
        };
        
        const ground = {
            height: 50,
            
            draw: function() {
                ctx.fillStyle = "#795548";
                ctx.fillRect(0, canvas.height - this.height, canvas.width, this.height);
                
                ctx.strokeStyle = "#000";
                ctx.strokeRect(0, canvas.height - this.height, canvas.width, this.height);
            }
        };
        
        // Controles
        canvas.addEventListener('click', function() {
            bird.jump();
        });
        
        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 32) { // Barra de espaço
                bird.jump();
            }
        });
        
        // Função para desenhar o jogo
        function draw() {
            // Limpa o canvas
            ctx.fillStyle = "#87CEEB";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Desenha os elementos
            pipes.draw();
            ground.draw();
            bird.draw();
            
            // Desenha a pontuação
            ctx.fillStyle = "#fff";
            ctx.font = "20px 'Press Start 2P'";
            ctx.fillText("Score: " + score, 20, 30);
        }
        
        // Função de atualização
        function update() {
            bird.update();
            pipes.update();
        }
        
        // Função de game over
        function gameOver() {
            clearInterval(game);
            
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#fff";
            ctx.font = "30px 'Press Start 2P'";
            ctx.fillText("GAME OVER", canvas.width / 2 - 150, canvas.height / 2);
            
            ctx.font = "20px 'Press Start 2P'";
            ctx.fillText("Score: " + score, canvas.width / 2 - 80, canvas.height / 2 + 40);
            
            ctx.font = "16px 'Press Start 2P'";
            ctx.fillText("Pressione F5 para jogar novamente", canvas.width / 2 - 250, canvas.height / 2 + 80);
        }
        
        // Loop principal do jogo
        function loop() {
            update();
            draw();
            frames++;
        }
        
        // Inicia o jogo
        let game = setInterval(loop, 20);
    }
    
    function carregarTetris() {
        // Mensagem de jogo em desenvolvimento
        jogoArea.innerHTML = '<div class="jogo-frame"><div style="display: flex; justify-content: center; align-items: center; height: 100%; background-color: #000;"><p style="color: #fff; font-family: \'Press Start 2P\', cursive; text-align: center;">Jogo em desenvolvimento.<br>Em breve disponível!</p></div></div>';
    }
    
    function carregarSpaceShooter() {
        // Mensagem de jogo em desenvolvimento
        jogoArea.innerHTML = '<div class="jogo-frame"><div style="display: flex; justify-content: center; align-items: center; height: 100%; background-color: #000;"><p style="color: #fff; font-family: \'Press Start 2P\', cursive; text-align: center;">Jogo em desenvolvimento.<br>Em breve disponível!</p></div></div>';
    }
    
    function carregarMemoryGame() {
        // Mensagem de jogo em desenvolvimento
        jogoArea.innerHTML = '<div class="jogo-frame"><div style="display: flex; justify-content: center; align-items: center; height: 100%; background-color: #000;"><p style="color: #fff; font-family: \'Press Start 2P\', cursive; text-align: center;">Jogo em desenvolvimento.<br>Em breve disponível!</p></div></div>';
    }
    
    function carregarAsteroidBlaster() {
        // Mensagem de jogo em desenvolvimento
        jogoArea.innerHTML = '<div class="jogo-frame"><div style="display: flex; justify-content: center; align-items: center; height: 100%; background-color: #000;"><p style="color: #fff; font-family: \'Press Start 2P\', cursive; text-align: center;">Jogo em desenvolvimento.<br>Em breve disponível!</p></div></div>';
    }
});

