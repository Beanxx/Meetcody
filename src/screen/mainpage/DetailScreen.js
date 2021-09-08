import * as React from 'react';
import {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from '../mainpage/styles';
import MainActionBar from '../mainpage/MainActionBar';
// import DeviceInfo from 'react-native-device-info';
import AppContext from '../../context/AppContext';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function DetailScreen({route, navigation}) {
  // const myContext = useContext(AppContext);
  const navigation2 = () => navigation.navigate('InviteAcceptScreen');
  const navigation3 = () => navigation.navigate('Home');
  // const {list, roles, acceptedCount} = route.params;
  const [role, setRole] = useState('');

  const [extra, setExtra] = useState('');

  const onChangeExtra = value => {
    setExtra(value);
  };

  const timeList = [
    {label: 'param1', value: 0},
    {label: 'param2', value: 1},
    {label: 'param3', value: 2},
    {label: 'param4', value: 3},
    {label: 'param5', value: 4},
  ];

  const placeList = [
    {label: 'param1', value: 5},
    {label: 'param2', value: 6},
    {label: 'param3', value: 7},
    {label: 'param4', value: 8},
    {label: 'param5', value: 9},
  ];

  const androidBool = Platform.OS === 'android' ? true : false;
  return (
    <SafeAreaView style={styles.detailSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'DetailScreen'} />

      <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
        <View style={styles.detailContents}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 일정 이름 : </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>수빈이랑 밥약</Text>
            </View>
            {/* <View>
            <Text style={styles.mainNeedConfirmMeetOwner}>✔방장</Text>
          </View> */}
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 온/오프라인 : </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>오프라인</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 일정 소요 시간 : </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>3hours 10minute</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>
                ◦ 현재 수락 인원/전체 인원 :
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>0명/2명</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailHeadText}>◦ 초대장 유효 기간 :</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.detailText}>3시간</Text>
            </View>
          </View>
        </View>

        {{role} !== '방장' ? (
          <View style={styles.pickContents}>
            <Text style={styles.detailTitleText}>
              📢 <Text style={{color: '#F15F5F'}}>방장</Text>만이 시간, 장소
              추천 후보를{'\n'}확인할 수 있습니다.{'\n'}
              <Text style={{fontSize: 13}}>
                (시간, 장소 추천 후보 중{'\n'}하나씩 선택하여 일정을
                확정하세요.)
              </Text>
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.pickView}>
                <Text style={styles.detailPick}>➰ 약속 추천 시간</Text>
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 10,
                  }}>
                  <RadioForm
                    radio_props={timeList}
                    initial={0}
                    formHorizontal={false}
                    buttonColor={'#2196f3'}
                    animation={true}
                    onPress={onChangeExtra}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      margin: 20,
                      marginLeft: 125,
                    }}
                  />
                </View>
              </View>
              <Text style={{textAlign: 'center', color: '#8C8C8C'}}>
                {' '}
                --------------------------------------------------------------{' '}
              </Text>
              <View style={styles.pickView}>
                <Text style={styles.detailPick}>➰ 약속 추천 장소</Text>
                <RadioForm
                  radio_props={placeList}
                  initial={5}
                  onPress={onChangeExtra}
                  formHorizontal={false}
                  buttonSize={15}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 20,
                    marginLeft: 125,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation3()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            navigation.navigate('InviteAcceptScreen', {
              list: list,
              role: roles,
              acceptedCount: acceptedCount,
            });
          }}>
          {{role} === '방장' ? (
            <Text>일정 확정하기</Text>
          ) : (
            <Text>초대 수락하기</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
