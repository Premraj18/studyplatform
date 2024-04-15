import { Box, Button, HStack, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Courses = () => {

    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    const categories = [
        'Web Development',
        'Artificial Intellegence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development'
    ]
    return (
        <div style={{width: '100vw'}}>
            <Box minH={'95vh'} width={'100%'} marginTop={8} display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={8}>
                <Heading m={8}>All Courses</Heading>

                <Input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder='Search a courses....'
                    type='text'
                    width={'60%'}
                />

                <HStack flexWrap={'wrap'} marginTop={8} justifyContent={'center'}>
                    {
                        categories.map((item,index) => (
                            <Button key={index} onClick={() => setCategory(item)}>
                                <Text>{item}</Text>
                            </Button>
                        ))
                    }
                </HStack>
            </Box>
        </div>
    )
}

export default Courses
