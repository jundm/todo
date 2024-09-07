import React, { useState } from 'react';
import { Input, Button, List, Checkbox, Typography } from 'antd';
import styles from './index.module.css';

const Paper: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input.trim()]);
            setInput('');
        }
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.container}>
            <Typography.Title level={2}>Todo List</Typography.Title>
            <div className={styles.inputContainer}>
                <Input
                    placeholder="할 일을 입력하세요."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onPressEnter={addTodo}
                />
                <Button type="primary" onClick={addTodo}>추가</Button>
            </div>
            <List
                bordered
                dataSource={todos}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<Button type="link" onClick={() => removeTodo(index)}>Remove</Button>]}
                    >
                        <Checkbox>{item}</Checkbox>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Paper;