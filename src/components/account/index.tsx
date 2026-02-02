import { useState } from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import PasswordField from '../ui/PasswordField';
import TextField from '../ui/TextField';

const RenderAccount = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('As senhas não conferem');
      return;
    }

    setPasswordError('');
    setShowPasswordModal(false);
  };

  return (
    <AuthContainer
      title="Minha Conta"
      subtitle="Gerencie suas informações e preferencias"
    >
      <View style={{ gap: 16, marginTop: 24 }}>
        <TextField
          label="Nome"
          icon={{ lib: 'MaterialIcons', name: 'person' }}
          value={'Kevin Braga'}
          onChangeText={setName}
        />

        <TextField
          label="CPF"
          icon={{ lib: 'MaterialIcons', name: 'badge' }}
          value={'234234234234'}
          onChangeText={setCpf}
          keyboardType="numeric"
          maxLength={11}
        />

        <TextField
          label="Telefone"
          icon={{ lib: 'MaterialIcons', name: 'phone' }}
          value={'123123123'}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={11}
        />

        <TextField
          label="Email"
          icon={{ lib: 'MaterialIcons', name: 'email' }}
          value={'kevinBraga@gmail.com'}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#420350ff',
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Alterar dados
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowPasswordModal(true)}
          style={{
            backgroundColor: '#555',
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Privacidade e Segurança
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal alterar senha */}
      <Modal visible={showPasswordModal} animationType="slide" transparent>
        <TouchableWithoutFeedback
          onPress={() => setShowPasswordModal(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              padding: 20,
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  padding: 20,
                  gap: 16,
                }}
              >
                <PasswordField
                  label="Digite sua senha antiga"
                  icon={{ lib: 'MaterialIcons', name: 'lock-outline' }}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                />

                <PasswordField
                  label="Digite sua senha nova"
                  icon={{ lib: 'MaterialIcons', name: 'lock' }}
                  value={newPassword}
                  onChangeText={(text) => {
                    setNewPassword(text);
                    setPasswordError('');
                  }}
                />

                <PasswordField
                  label="Confirme sua senha"
                  icon={{ lib: 'MaterialIcons', name: 'lock-reset' }}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                    setPasswordError('');
                  }}
                />

                {passwordError ? (
                  <Text style={{ color: 'red', fontSize: 14 }}>
                    {passwordError}
                  </Text>
                ) : null}

                <TouchableOpacity
                  onPress={handleChangePassword}
                  style={{
                    backgroundColor: '#420350ff',
                    padding: 14,
                    borderRadius: 6,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '600' }}>
                    Alterar senha
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </AuthContainer>
  );
};

export default RenderAccount;
