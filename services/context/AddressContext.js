import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);

export const AddressProvider = ({ children }) => {
  const BASE_URL = 'https://sinavita-admin.flameoflames.com/api';
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false)
  // Fetch all addresses
  const fetchAddresses = async () => {
    const token = localStorage.getItem('userToken');
    setLoading(true)
    try {
      const response = await axios.get(`${BASE_URL}/user/self-address`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
      setAddresses(response?.data?.data || null);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching user data:', error.response?.data || error.message);
      setAddresses(null);
      setLoading(false)
    }
  };



  // // Update an address
  // const handleUpdateAddress = async (id, data) => {
  //   try {
  //     const res = await updateAddress(id, data, userToken);
  //     toast.success('Address updated');
  //     fetchAddresses();
  //   } catch (err) {
  //     toast.error(err?.message || 'Failed to update address');
  //   }
  // };

  // Delete an address
  const handleDeleteAddress = async (id) => {
    setDeleteLoading(true)
    const token = localStorage.getItem('userToken');
    try {
      const response = await axios.post(
        `${BASE_URL}/user/delete-address`,
        { id }, // Required field in body
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDeleteLoading(false)
      toast.success('Address deleted');
      fetchAddresses();
      setAddresses((prev) => prev.filter((item) => item.address_id !== id));
    } catch (err) {
      setDeleteLoading(false)
      toast.error(err?.message || 'Failed to delete address');
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <AddressContext.Provider
      value={{
        loading,
        addresses,
        fetchAddresses,
        // handleUpdateAddress,
        handleDeleteAddress,
        deleteLoading
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
