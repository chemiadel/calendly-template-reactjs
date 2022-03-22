import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Ckeditor({defaultValue="", setContent=()=>{}}) {

        return (
                <CKEditor
                    editor={ ClassicEditor }
                    data={defaultValue}
                    config={{
                        toolbar: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            '|',
                            'blockQuote',
                            'bulletedList',
                            'numberedList',
                            
                        ]
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        if(setContent) setContent(data)
                        console.log( { event, editor, data } );
                    } }
                />
        );
    }