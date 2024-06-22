# snapme-snapshots

Create a screenshot program, and call it, "Snapme", that allows also taking scrolling screenshots, when there is a scroll possibility, like in internet browsers, file-browsers, text editors like MS-Word and so on.
The program should allow  taking: 
1. A whole screen screenshot.
2. A defined area by the mouse, while the first mouse-click defines the start of a rectangle, and the second mouse-click defines the end of the rectangle. Once the second click is made, the program takes a screenshot of the content inside the defined rectangle.
3. Window size or conrol size screenshots. When the user hovers over a window or a control, it would draw a temporary line in red arould it indicating, it would be the area of  the screenshot. Should the user click the mouse during that, the area that is been shown last, would be screenshot.
4. A mini-window would popup for 10 seconds over the bottom of the taskbar showing  a preview of the last screenshot and showing all previous screenshots.
5. The user can scroll all already made screenshots in that window, and copy anyone of them by right-clicking over any thumbnail of that screenshot and pressing copy, or merely by hovering over it, and pressing the keys: Ctrl+C.
6. The user can also right-click over any thumbnail of an already made screenshot and press save, and it will open save menu, where he can choose where to save it.
7. The user can mark several already made screenshots at once and save them at once.
8. The user can mark and single or many already made screenshots and delete them at once, by pressing delete, or by pressing the right mouse-click and selecting delete from the menu.
9. All screenshots will appear in that mini-window at the bottom of the screen as thumbnails.
10. A settings button should appear in frame of that mini-window and also when right-clicking on the thumbnail of the program in the taskbar.
11. When pressing settings, several settings should be inside, among them
a. Define the time the mini-window appears, but default 10 seconds, the user can change that to any time from 1-100 seconds, or check to keep it appear permanently, as long as the program is open
b. The default save-folder for all made screenshots can be changed. Usually, the program should make that under the name of the program "Snapme" within the Windows default folder Documents.
c. If default saving-folder is changed, then it would be saved and would become the new default folder for the program, even if the program is closed and reopened. It should register and remember the new folder path. Eventually put a registery key or otherwise.
d. screenshot default saving format can be changed. Initial default format is PNG, but it can be changed to JPG. When changed to JPG, the screenshot should be defined with jpg quality either 80% or 100%.
e. A possibility to define the size of the screenshot-thumbnails that appear in the mini-window. Conventionally the size should be about 120x120 pixels for at least for the larger size, since screenshots could have non-symmetrical sizes, and the mini window should show around 3 thumbnails in the horizontal direction. But the user can define a new size, which will always define the largest of the 2 dimensions of the thumbnail, and the mini-window, will then immediately re-arrange the thumbnails to match the new size. The user would be able to define the new size in the range between 50 pixels to 250 pixels only.
12. Doubble-clicking any screenshot thumbnail, will open it in a full new window, which will be used later to edit the screen shot, and be a sort of a mini-image-editor.
13. The screensize of the mini-window can be adjusted like a conventional window, but the program would remember the adjusted new size and always re-open and newly adjusted size.
14. The program would always make the best resolution screenshot taking in consideration the physical screen resolution.
The program would allow to define a keyboard shortcut for taking a screenshot. The default shortcut should be pressing the PrtScn key, but the user should have the possibility in the settings to choose any other keyboard key shortcut. It should appear in the settings like three spaces to describe the combinations of keys, for example, the user presses the first space and presses the key Ctrl, then it appears inside that space, that he chose Ctrl. If he presses Delete or Backspace, it deletes the shortcut in the active space, he is in and allows him to choose a new one. Then the user can press the second space, and choose another key, for example =. This will define the screenshot shortcut as Ctrl and =.
The usere can also choose a 3 shortcut combination, like Ctrl, Alt, =. Once the user has chosen a new shortcut, it will replace the default one, and will remain so, also after closing and re-openning the program. 
15. The mini-window should allow scrolling in order to see all taken screenshot thumbnails.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/snapme-snapshots.git
cd snapme-snapshots
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
