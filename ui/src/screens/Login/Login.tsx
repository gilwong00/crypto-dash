import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './style';
import { COLORS } from '../../constants';

const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {/* <Text style={styles.label}>Username</Text> */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Username'
            />
          )}
          name='username'
          rules={{ required: true }}
        />
        {/* <Text style={styles.label}>Password</Text> */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Password'
            />
          )}
          name='password'
          rules={{ required: true }}
        />

        <View style={styles.loginButton}>
          <Button
            color={COLORS.white}
            title='Login'
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <Text>
          Don't have an account? Click <Text>Here</Text> to sign up
        </Text>
      </View>
    </View>
  );
};

export default Login;
