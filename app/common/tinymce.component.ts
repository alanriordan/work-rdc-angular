import {Component, ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
declare var tinymce: any;
@Component({
	selector: 'tiny-editor',
	template: `<b>Notes details</b><textarea class="tinyMCE" style="height:100px"></textarea>`
})

export class TinyEditor implements OnInit, OnDestroy {

    @Input() value: FormControl;
    @Output() onEditorKeyup = new EventEmitter<any>();
	tinyEditor: any = this;

    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        var that = this;
        tinymce.init(
			{
				selector: "textarea",
				plugins: ["code"],
				menubar: false,
				statusbar: false,
				toolbar1: "bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect   bullist numlist outdent indent blockquote undo redo removeformat| code",
				setup: (editor: any) => {
					this.tinyEditor = editor;
					editor.on('change', (e: any, l: any) => {
						let name: Observable<string>;						
						that.onEditorKeyup.emit(editor.getContent())
						//this.value.setValue(editor.getContent());						
					});
				}
			});
	}
    

	ngOnDestroy() {
    	tinymce.remove(this.tinyEditor);
  	}
}