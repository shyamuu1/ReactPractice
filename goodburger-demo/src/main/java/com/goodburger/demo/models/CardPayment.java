package com.goodburger.demo.models;

public class CardPayment {
	
	private String creditCardNumber;
	private Address billingAddress;
	private Address shippingAddress;
	private String cvcNumber;
	private String paymentType;
	
	public CardPayment() {
		setCreditCardNumber("");
		setBillingAddress(new Address());
		setShippingAddress(new Address());
		setCvcNumber("");
		setPaymentType("Card");
	}

	public CardPayment(String creditCardNumber, Address billingAddress, Address shippingAddress, String cvcNumber, String paymentType) {
		this.creditCardNumber = creditCardNumber;
		this.billingAddress = billingAddress;
		this.shippingAddress = shippingAddress;
		this.cvcNumber = cvcNumber;
		this.paymentType = "Card";
	}

	public String getCreditCardNumber() {
		return creditCardNumber;
	}

	public void setCreditCardNumber(String creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}

	public Address getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(Address billingAddress) {
		this.billingAddress = billingAddress;
	}

	public Address getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(Address shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public String getCvcNumber() {
		return cvcNumber;
	}

	public void setCvcNumber(String cvcNumber) {
		this.cvcNumber = cvcNumber;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	@Override
	public String toString() {
		return "CardPayment [creditCardNumber=" + creditCardNumber + ", billingAddress=" + billingAddress
				+ ", shippingAddress=" + shippingAddress + ", cvcNumber=" + cvcNumber + ", paymentType=" + paymentType
				+ "]";
	}
	
	
	
	

}
