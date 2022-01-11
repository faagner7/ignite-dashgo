import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

export function Sidebar() {
  const test = 'teste'
  console.log('test', test)
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box as='section'>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' align='center'>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Dashboard
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={RiContactsLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
