import { Component } from './components/component.js';
import { TodoComponent } from './components/item/todo.js';
import { NoteComponent } from './components/item/note.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { InputDialog } from './components/dialog/dialog.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const video = new VideoComponent('Video Title', 'https://youtu.be/-KMZJor-FzY?list=RDMM');
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener('click',()=>{
      const dialog = new InputDialog();

      dialog.setOnCloseListener(()=>{
        dialog.removeFrom(document.body);
      })

      dialog.setOnSubmitListener(()=>{
        dialog.removeFrom(document.body);
      })

      dialog.attachTo(document.body)
    })
  }
}

new App(document.querySelector('.document')! as HTMLElement);
