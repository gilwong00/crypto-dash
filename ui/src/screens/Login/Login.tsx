import React from 'react';
import { Button, TextInput, View, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './style';
import { COLORS } from '../../constants';
import { useMutation } from 'react-query';
import { AuthUser } from '../../@types';
import { login } from '../../api';
import { userStore } from '../../store';

const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty }
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const setUser = userStore(s => s.setUser);
  const { isLoading, mutateAsync } = useMutation(login, {
    onSuccess: ({ data }) => {
      setUser(data as AuthUser);
    },
    onError: err => {
      Alert.alert('ERROR', (err as Error).message);
    }
  });

  const onSubmit = async (data: AuthUser) => await mutateAsync(data);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.loginHeader}>Welcome back!</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Email Address'
              autoCapitalize='none'
            />
          )}
          name='email'
          rules={{ required: true }}
        />
        {errors.email && (
          <Text style={styles.errorText}>Username is required.</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Password'
              secureTextEntry={true}
            />
          )}
          name='password'
          rules={{ required: true }}
        />
        {errors.password && (
          <Text style={styles.errorText}>Password is required.</Text>
        )}
        <View style={styles.loginButton}>
          <Button
            color={COLORS.white}
            title='Login'
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading || !isDirty}
          />
        </View>
        <Text style={styles.signupMessage}>
          Don't have an account? Click{' '}
          <Text style={styles.signupCTA}>Here</Text> to sign up
        </Text>
      </View>
    </View>
  );
};

export default Login;
