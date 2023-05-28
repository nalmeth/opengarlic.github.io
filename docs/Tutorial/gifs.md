# GIFs

**You can create GIFs of your game mode for download.**

## Create Frames for the GIF

Konva and Canvas are available on the server for designing your frames.
Some prebuilt frames for displaying text or an image are provided.

To make compatible frames:
- All frames should be named as follows: *username.frame0000.png*
- Username should be the name of the user who started that series.
- Frames should be saved in the directory provided (see [Maker](#create-the-maker-for-your-mode))
- For quality, it's suggested to save frames as png.
  Canvas will automatically use png if you use 'toDataURL'

## Provided Frames

```ts title="modules/FrameMakers/TextFrame.js"
// Creates a png frame that display text
createFrame:function(stageSize, slices, colors, frameData, savePath)	// stageSize:object { width:number, height:number }
																		// slices:array List of slices for the background generation
																		// colors:array List of colors for background generation
																		// frameData:object { value:string, name:string } Text to display and username
																		// savePath:string Path to save the frame
```
```ts title="modules/FrameMakers/ImageFrame.js"
createFrame:function(stageSize, slices, colors, frameData, savePath, tmpPath)	// stageSize:object { width:number, height:number }
																				// slices:array List of slices for the background generation
																				// colors:array List of colors for background generation
																				// frameData:object { value:string, name:string } Text to display and username
																				// savePath:string Path to save the frame
																				// tmpPath:string Path to save temporary intermediate image (auto deleted)
```
:::caution
Currently these frames are mostly calculated for the Standard mode,
which uses 1000x600 size canvas. If you want to use a different size,
you may need to create your own.
:::

## Frame Functions

There are also some premade functions available to help with designing
your frames.

```ts title="modules/FrameFunctions.js"
// In order to provide better randomization and avoid clustering
// you provide grid slices in which to generate.

// Creates a colored background with random stars.
createBackground:function(stageSize, layer, slices, colors)	// stageSize:object { width:number, height:number }
															// layer:Konva.layer The layer object on which to draw.
															// slices:array List of slice objects passed to createStars.
															// colors:array List of colors, one is randomly selected for
															// 				the background, the rest used for stars.

// Creates random 4 and 8 pointed stars on the given layer.
createStars:function(slice, starColors, layer)		// slice:object { startX:number, endX:number, startY:number, endY: number }
													// starColors:array ['#000','#F00', ...] List of randomly selected colors
													// layer:Konva.layer The layer object on which to draw

// Creates a chat bubble in which to display text.
// Note: currently some of the calculations for placement may only work for Standard stage size.
createTextBubble:function(stageSize, position, layer)	// stageSize:object { width:number, height:number }
														// position:object { x:number, y:number } Upper-left corner of the bubble.
														// layer:Konva.layer The layer object on which to draw.

// Creates an anonymous user icon.
createUserIcon:function(position, layer)	// position:object { x:number, y:number } Position to place the icon.
											// layer:Konva.Layer The layer object on which to draw.

// Calculate width of text to display with the given font.
getTextWidth:function(text, font)			// text:string The text to measure.
											// font:string Size & Font (ex. '12px sans-serif')

// Creates a box for displaying a username.
createUserNameBox:function(position, width, height, layer)	// position:object { x:number, y: number } Upper-left corner of the box.
															// width:number Width of the box. (getTextWidth can be useful for this)
															// height:number Height of the box.
															// layer:Konva.Layer The layer object on which to draw.
```

## Create the Maker for your mode

- Create your color array
- Create your array of slices for the canvas
- Create your stage size
- Export a function named 'generateFrames' (see below)

```ts title="modules/FrameMakers/MyExampleMaker.js"
import * as Lobby from '../Lobby.js'

/**
 * @param {string} lobbyCode The code for the lobby
 * @param {string} playerName The name of the user who started the series
 * @param {string} outputDir The directory where the frames should be saved
 */
export const generateFrames = async (lobbyCode, playerName, outputDir) => {

	// Get the data you saved for the lobby
	const lobby = await Lobby.getLobbyData(lobbyCode);

	// Process your data creating frames from the functions/modules
	// provided or you create.

}
```

After your frames have been generated, the GIF will be automatically built
from the frames and saved as *username.gif* in the same directory. This will
then be converted to via into a data URL. This is then passed to the front-end
in the 'GIFCreated' event. You can listen to this event on your end screen to
receive the image and start the download.

```ts title="client/src/components/screens/MyEndGame.js"
const events = {
		GIFCreated: (data, filename) => {
			console.log('GIF Created');
			setGifButtonDisabled(false);
			let link = document.createElement('a');
			link.href = data;
			link.download = filename;
			link.style = 'display:none';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	useEffect(() => {
		for(const name in events) {
			socket.on(name, events[name]);
		}

		return () => {
			for(const name in events) {
				socket.off(name, events[name]);
			}
		}
		// eslint-disable-next-line
	}, []);
```

## Import your maker

```ts title="modules/FrameMakers.js"
import * as StandardFrameMaker from './FrameMakers/StandardFrameMaker.js';
import * as MyExampleMaker from './FrameMakers/MyExampleMaker.js';

const FrameMakers = {
	'Standard': StandardFrameMaker
	'MyExampleMode': MyExampleMaker		// The key should match the name of the mode saved in lobby.mode
};

export default FrameMakers;
```