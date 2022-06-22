import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '../src/components/Loading';
import ErrorMessage from '../src/components/ErrorMessage';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from '@chakra-ui/react'
import * as React from 'react'
import Dropzone from '../src/components/Dropzone'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NProgress from 'nprogress';

export default function Profile() {
  const router = useRouter();

  // Retrieve user user from our custom React hook
  const { user, isError, isLoading, mutate, updateuser } = useUser();

  // Populate HTML form with current user values
  const { register, handleSubmit, watch, reset } = useForm({defaultValues: user});

  // Update (i.e. reset) the form with the current user values when user eventually updates from our custom React hook useuser()
  // Necessary since on initial React component load, the user is 'undefined'.
  useEffect(() => {
    // Debug statements are useful for seeing when useSWR updates the user during mutate and refetch
    console.log("Profile Page");
    console.log(user); 

    reset(user);
  }, [user]);

  function getFormData() {
    var newData = {
      "username": document.getElementById('username').value,
      "email": document.getElementById('email').value,
      "website": document.getElementById('website').checked,
      "Bio": document.getElementById('Bio').checked,
      "picture": document.getElementById('picture').value
    };
    console.log(newData);
    if (newData.email_verified == "on")
      newData.email_verified = true;
    if (newData.email_verified == "off")
      newData.email_verified = false;
    
    return newData;
  }
  
  async function updateUserSession(formData) {
    NProgress.start();
    // Update the local data at /api/auth/me immediately via mutate, and disable the useSWR revalidation (since we want to use the new cached version)
    // NOTE: key is not required when using useSWR's mutate as it's pre-bound (https://swr.vercel.app/docs/mutation#bound-mutate)
    mutate(async user => {
      user.username = formData.username;
      user.bio = formData.bio;
      user.email = formData.email;
      user.email_verified = formData.email_verified;
      user.picture = formData.picture;
    }, false);

    // Update the Auth0 user too, but dont await a response since we already cached the current values with useSWR mutate.
    updateuser(formData);
    NProgress.done();
    router.replace('/');
  }


  async function updateUserSessionWithoutSWR(formData) {
    NProgress.start();
    // We must await a response since at the end of the updateuser function, it calls /api/auth/refetch to update the local nextjs-auth0 cookie.
    await updateuser(formData);
    NProgress.done();
    router.replace('/');
  }
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{isError.message}</div>;
 
  if (user) {
  return (
    <Box>
      <Container
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Stack spacing="5">
      <Stack
        spacing="4"
        direction={{
          base: 'column',
          sm: 'row',
        }}
        justify="space-between"
      >
        <Box>
          <Text fontSize="lg" fontWeight="medium">
            Your Profile
          </Text>
          <Text color="muted" fontSize="sm">
            Tell others who you are
          </Text>
        </Box>
      </Stack>
      <Divider />
      <Stack spacing="5" divider={<StackDivider />}>
        <FormControl id="name">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Name</FormLabel>
            <Input
              maxW={{
                md: '3xl',
              }}
             input id="nickname" {...register("nickname")} type="text"
            />
          </Stack>
        </FormControl>
        <FormControl id="email">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Email</FormLabel>
            <Input
            Verified
            id="email" {...register("email")}
              maxW={{
                md: '3xl',
              }}
            />
          </Stack>
        </FormControl>
        <FormControl id="picture">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Photo</FormLabel>
            <Stack
              spacing={{
                base: '3',
                md: '5',
              }}
              direction={{
                base: 'column',
                sm: 'row',
              }}
              width="full"
              maxW={{
                md: '3xl',
              }}
            >
              <Avatar  Picture id="picture" {...register("picture")} src={user?.picture}/>
              <Dropzone width="full" />
            </Stack>
          </Stack>
        </FormControl>
        <FormControl id="website">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <FormLabel variant="inline">Website</FormLabel>
            <InputGroup
              maxW={{
                md: '3xl',
              }}
            >
              <InputLeftAddon>https://</InputLeftAddon>
              <Input id="email" {...register("email")} />
            </InputGroup>
          </Stack>
        </FormControl>
        <FormControl id="bio">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '1.5',
              md: '8',
            }}
            justify="space-between"
          >
            <Box>
              <FormLabel variant="inline">Bio</FormLabel>
              <FormHelperText mt="0" color="muted">
                Write a short introduction about you
              </FormHelperText>
            </Box>
            <Textarea
              maxW={{
                md: '3xl',
              }}
              rows={5}
              resize="none"
            id="Bio" {...register("Bio")}
             />
          </Stack>
        </FormControl>

        <Flex direction="row-reverse">
          <Button variant="ghost-on-accent" as="a" onClick={() => {
              var newData = getFormData(); 
              updateUserSession(newData);
            }}>Save</Button>   <Button name="noswr" as="a" onClick={() => {
              var newData = getFormData(); 
              updateUserSessionWithoutSWR(newData);
            }}>Save without SWR</Button>

            <Button as="a" onClick={() => {
              reset();
              router.back();
            }}>Cancel</Button>
            </Flex>
      </Stack>
    </Stack>
  </Container>
  </Box>
  ); 
  }
  return <Button as="a" href="/api/auth/login">Login to view profile</Button>;
}
