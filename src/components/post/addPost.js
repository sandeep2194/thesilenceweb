import React, { Fragment, useState, useMemo, useCallback } from 'react'
import LogoHeader from '../common/logoheader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import { createEditor, Transforms, Editor, Text } from 'slate'
import { Slate, Editable, withReact, } from 'slate-react'

const CustomEditor = {
    isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true,
        })

        return !!match
    },

    isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code',
        })

        return !!match
    },

    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },

    toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? null : 'code' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
}

const AddPost = (props) => {
    const { isLoggedIn } = props
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([{
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },])

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    return (
        <Fragment>
            {!isLoggedIn && <Redirect to="/send-otp" />}
            <LogoHeader pageName='Add Post' />
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col>
                        <Slate
                            editor={editor}
                            value={value}
                            onChange={newValue => setValue(newValue)}
                        >
                            <Editable
                                renderElement={renderElement}
                                renderLeaf={renderLeaf}

                                onKeyDown={event => {
                                    if (!event.ctrlKey) {
                                        return
                                    }

                                    // Replace the `onKeyDown` logic with our new commands.
                                    switch (event.key) {
                                        case '`': {
                                            event.preventDefault()
                                            CustomEditor.toggleCodeBlock(editor)
                                            break
                                        }

                                        case 'b': {
                                            event.preventDefault()
                                            CustomEditor.toggleBoldMark(editor)
                                            break
                                        }
                                        default: {
                                            event.preventDefault()
                                        }
                                    }
                                }}
                            />
                        </Slate>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
const Leaf = props => {
    return (
        <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
            {props.children}
        </span>
    )
}
// Define a React component renderer for our code blocks.
const CodeElement = props => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}
const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

function mapStateToProps({ users }) {
    const token = localStorage.getItem('token')
    return {
        isLoggedIn: (token) ? true : false,
    }
}
export default connect(mapStateToProps)(AddPost)