// // Background scrolling speed 
// let move_speed = 3; 
	
// // Gravity constant value 
// let gravity = 0.5; 
	
// // Getting reference to the bird element 
// let bird = document.querySelector('.bird'); 
	
// // Getting bird element properties 
// let bird_props = bird.getBoundingClientRect(); 
// let background = 
// 	document.querySelector('.background') 
// 			.getBoundingClientRect(); 
	
// // Getting reference to the score element 
// let score_val = 
// 	document.querySelector('.score_val'); 
// let message = 
// 	document.querySelector('.message'); 
// let score_title = 
// 	document.querySelector('.score_title'); 
	
// // Setting initial game state to start 
// let game_state = 'Start'; 
	
// // Add an eventlistener for key presses 
// document.addEventListener('keydown', (e) => { 
	
// // Start the game if enter key is pressed 
// if (e.key == 'Enter' && 
// 	game_state != 'Play') { 
// 	document.querySelectorAll('.pipe_sprite') 
// 			.forEach((e) => { 
// 	e.remove(); 
// 	}); 
// 	bird.style.top = '40vh'; 
// 	game_state = 'Play'; 
// 	message.innerHTML = ''; 
// 	score_title.innerHTML = 'Score : '; 
// 	score_val.innerHTML = '0'; 
// 	play(); 
// } 
// }); 
// function play() { 
// function move() { 
	
// 	// Detect if game has ended 
// 	if (game_state != 'Play') return; 
	
// 	// Getting reference to all the pipe elements 
// 	let pipe_sprite = document.querySelectorAll('.pipe_sprite'); 
// 	pipe_sprite.forEach((element) => { 
		
// 	let pipe_sprite_props = element.getBoundingClientRect(); 
// 	bird_props = bird.getBoundingClientRect(); 
		
// 	// Delete the pipes if they have moved out 
// 	// of the screen hence saving memory 
// 	if (pipe_sprite_props.right <= 0) { 
// 		element.remove(); 
// 	} else { 
// 		// Collision detection with bird and pipes 
// 		if ( 
// 		bird_props.left < pipe_sprite_props.left + 
// 		pipe_sprite_props.width && 
// 		bird_props.left + 
// 		bird_props.width > pipe_sprite_props.left && 
// 		bird_props.top < pipe_sprite_props.top + 
// 		pipe_sprite_props.height && 
// 		bird_props.top + 
// 		bird_props.height > pipe_sprite_props.top 
// 		) { 
			
// 		// Change game state and end the game 
// 		// if collision occurs 
// 		game_state = 'End'; 
// 		message.innerHTML = 'Press Enter To Restart'; 
// 		message.style.left = '28vw'; 
// 		return; 
// 		} else { 
// 		// Increase the score if player 
// 		// has the successfully dodged the 
// 		if ( 
// 			pipe_sprite_props.right < bird_props.left && 
// 			pipe_sprite_props.right + 
// 			move_speed >= bird_props.left && 
// 			element.increase_score == '1'
// 		) { 
// 			score_val.innerHTML = +score_val.innerHTML + 1; 
// 		} 
// 		element.style.left = 
// 			pipe_sprite_props.left - move_speed + 'px'; 
// 		} 
// 	} 
// 	}); 

// 	requestAnimationFrame(move); 
// } 
// requestAnimationFrame(move); 

// let bird_dy = 0; 
// function apply_gravity() { 
// 	if (game_state != 'Play') return; 
// 	bird_dy = bird_dy + gravity; 
// 	document.addEventListener('keydown', (e) => { 
// 	if (e.key == 'ArrowUp' || e.key == ' ') { 
// 		bird_dy = -7.6; 
// 	} 
// 	}); 

// 	// Collision detection with bird and 
// 	// window top and bottom 

// 	if (bird_props.top <= 0 || 
// 		bird_props.bottom >= background.bottom) { 
// 	game_state = 'End'; 
// 	message.innerHTML = 'Press Enter To Restart'; 
// 	message.style.left = '28vw'; 
// 	return; 
// 	} 
// 	bird.style.top = bird_props.top + bird_dy + 'px'; 
// 	bird_props = bird.getBoundingClientRect(); 
// 	requestAnimationFrame(apply_gravity); 
// } 
// requestAnimationFrame(apply_gravity); 

// let pipe_seperation = 0; 
	
// // Constant value for the gap between two pipes 
// let pipe_gap = 35; 
// function create_pipe() { 
// 	if (game_state != 'Play') return; 
	
// 	// Create another set of pipes 
// 	// if distance between two pipe has exceeded 
// 	// a predefined value 
// 	if (pipe_seperation > 115) { 
// 	pipe_seperation = 0 
		
// 	// Calculate random position of pipes on y axis 
// 	let pipe_posi = Math.floor(Math.random() * 43) + 8; 
// 	let pipe_sprite_inv = document.createElement('div'); 
// 	pipe_sprite_inv.className = 'pipe_sprite'; 
// 	pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh'; 
// 	pipe_sprite_inv.style.left = '100vw'; 
		
// 	// Append the created pipe element in DOM 
// 	document.body.appendChild(pipe_sprite_inv); 
// 	let pipe_sprite = document.createElement('div'); 
// 	pipe_sprite.className = 'pipe_sprite'; 
// 	pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh'; 
// 	pipe_sprite.style.left = '100vw'; 
// 	pipe_sprite.increase_score = '1'; 
		
// 	// Append the created pipe element in DOM 
// 	document.body.appendChild(pipe_sprite); 
// 	} 
// 	pipe_seperation++; 
// 	requestAnimationFrame(create_pipe); 
// } 
// requestAnimationFrame(create_pipe); 
// } 

let gameState = 'start'; 
let paddle_1 = document.querySelector('.paddle_1'); 
let paddle_2 = document.querySelector('.paddle_2'); 
let board = document.querySelector('.board'); 
let initial_ball = document.querySelector('.ball'); 
let ball = document.querySelector('.ball'); 
let score_1 = document.querySelector('.player_1_score'); 
let score_2 = document.querySelector('.player_2_score'); 
let message = document.querySelector('.message'); 
let paddle_1_coord = paddle_1.getBoundingClientRect(); 
let paddle_2_coord = paddle_2.getBoundingClientRect(); 
let initial_ball_coord = ball.getBoundingClientRect(); 
let ball_coord = initial_ball_coord; 
let board_coord = board.getBoundingClientRect(); 
let paddle_common = 
	document.querySelector('.paddle').getBoundingClientRect(); 

let dx = Math.floor(Math.random() * 4) + 3; 
let dy = Math.floor(Math.random() * 4) + 3; 
let dxd = Math.floor(Math.random() * 2); 
let dyd = Math.floor(Math.random() * 2); 

document.addEventListener('keydown', (e) => { 
if (e.key == 'Enter') { 
	gameState = gameState == 'start' ? 'play' : 'start'; 
	if (gameState == 'play') { 
	message.innerHTML = 'Game Started'; 
	message.style.left = 42 + 'vw'; 
	requestAnimationFrame(() => { 
		dx = Math.floor(Math.random() * 4) + 3; 
		dy = Math.floor(Math.random() * 4) + 3; 
		dxd = Math.floor(Math.random() * 2); 
		dyd = Math.floor(Math.random() * 2); 
		moveBall(dx, dy, dxd, dyd); 
	}); 
	} 
} 
if (gameState == 'play') { 
	if (e.key == 'w') { 
	paddle_1.style.top = 
		Math.max( 
		board_coord.top, 
		paddle_1_coord.top - window.innerHeight * 0.06 
		) + 'px'; 
	paddle_1_coord = paddle_1.getBoundingClientRect(); 
	} 
	if (e.key == 's') { 
	paddle_1.style.top = 
		Math.min( 
		board_coord.bottom - paddle_common.height, 
		paddle_1_coord.top + window.innerHeight * 0.06 
		) + 'px'; 
	paddle_1_coord = paddle_1.getBoundingClientRect(); 
	} 

	if (e.key == 'ArrowUp') { 
	paddle_2.style.top = 
		Math.max( 
		board_coord.top, 
		paddle_2_coord.top - window.innerHeight * 0.1 
		) + 'px'; 
	paddle_2_coord = paddle_2.getBoundingClientRect(); 
	} 
	if (e.key == 'ArrowDown') { 
	paddle_2.style.top = 
		Math.min( 
		board_coord.bottom - paddle_common.height, 
		paddle_2_coord.top + window.innerHeight * 0.1 
		) + 'px'; 
	paddle_2_coord = paddle_2.getBoundingClientRect(); 
	} 
} 
}); 

function moveBall(dx, dy, dxd, dyd) { 
if (ball_coord.top <= board_coord.top) { 
	dyd = 1; 
} 
if (ball_coord.bottom >= board_coord.bottom) { 
	dyd = 0; 
} 
if ( 
	ball_coord.left <= paddle_1_coord.right && 
	ball_coord.top >= paddle_1_coord.top && 
	ball_coord.bottom <= paddle_1_coord.bottom 
) { 
	dxd = 1; 
	dx = Math.floor(Math.random() * 4) + 3; 
	dy = Math.floor(Math.random() * 4) + 3; 
} 
if ( 
	ball_coord.right >= paddle_2_coord.left && 
	ball_coord.top >= paddle_2_coord.top && 
	ball_coord.bottom <= paddle_2_coord.bottom 
) { 
	dxd = 0; 
	dx = Math.floor(Math.random() * 4) + 3; 
	dy = Math.floor(Math.random() * 4) + 3; 
} 
if ( 
	ball_coord.left <= board_coord.left || 
	ball_coord.right >= board_coord.right 
) { 
	if (ball_coord.left <= board_coord.left) { 
	score_2.innerHTML = +score_2.innerHTML + 1; 
	} else { 
	score_1.innerHTML = +score_1.innerHTML + 1; 
	} 
	gameState = 'start'; 

	ball_coord = initial_ball_coord; 
	ball.style = initial_ball.style; 
	message.innerHTML = 'Press Enter to Play Pong'; 
	message.style.left = 38 + 'vw'; 
	return; 
} 
ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px'; 
ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px'; 
ball_coord = ball.getBoundingClientRect(); 
requestAnimationFrame(() => { 
	moveBall(dx, dy, dxd, dyd); 
}); 
} 
