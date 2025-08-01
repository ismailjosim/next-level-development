import { useState, useContext } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import districtData from '../../public/districtUpazila.json' // adjust path if needed
import { AuthContext } from '../providers/AuthProvider' // adjust path
import { Link, useNavigate } from 'react-router'
import Lottie from 'lottie-react'
import Register1 from '../../public/Register.json'

const Register = () => {
	const { createUser, updateUser } = useContext(AuthContext)
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		avatar: '',
		bloodGroup: '',
		district: '',
		upazila: '',
		password: '',
		confirmPassword: '',
	})

	const [upazilas, setUpazilas] = useState([])
	const [imageLoading, setImageLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })

		if (name === 'district') {
			const selectedDistrict = districtData.find((d) => d.district === value)
			setUpazilas(selectedDistrict ? selectedDistrict.upazilas : [])
			setFormData((prev) => ({ ...prev, upazila: '' }))
		}
	}

	const handleImageUpload = async (e) => {
		const image = e.target.files[0]
		if (!image) return
		const form = new FormData()
		form.append('image', image)
		setImageLoading(true)

		try {
			const res = await axios.post(
				`https://api.imgbb.com/1/upload?key=b594a24f50dc4ed1d79ff670bbd64290`, // REPLACE with your key
				form,
			)
			const imageUrl = res.data?.data?.url
			setFormData((prev) => ({ ...prev, avatar: imageUrl }))
		} catch (error) {
			console.error(
				'Image upload failed:',
				error.response?.data || error.message,
			)
			Swal.fire('Error', 'Image upload failed!', 'error')
		} finally {
			setImageLoading(false)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (formData.password !== formData.confirmPassword) {
			return Swal.fire('Error', 'Passwords do not match!', 'error')
		}
		if (!formData.avatar) {
			return Swal.fire('Error', 'Please upload avatar image!', 'error')
		}

		try {
			// 1. Create Firebase user
			createUser(formData.email, formData.password).then(async (result) => {
				if (result.user) {
					const firebaseUser = userCredential.user
					// 2. Update Firebase profile with name and avatar
					updateUser({
						displayName: formData.name,
						photoURL: formData.avatar,
					})

					// 3. Prepare data for backend
					const newUser = {
						email: formData.email,
						name: formData.name,
						avatar: formData.avatar,
						bloodGroup: formData.bloodGroup,
						district: formData.district,
						upazila: formData.upazila,
						role: 'donor',
						status: 'active',
						uid: firebaseUser.uid,
					}
					console.log(newUser)
					// 4. Send to backend
					const result = await axios.post(
						'http://localhost:5000/users',
						newUser,
					)
					if (result.acknowledge) {
						// Reset form
						setFormData({
							email: '',
							name: '',
							avatar: '',
							bloodGroup: '',
							district: '',
							upazila: '',
							password: '',
							confirmPassword: '',
						})
						setUpazilas([])
						Swal.fire('Success', 'Registration successful!', 'success').then(
							() => {
								navigate('/')
							},
						)
					}
				}
			})
		} catch (error) {
			console.error(error)
			Swal.fire(
				'Error',
				'Registration failed! ' + (error.message || ''),
				'error',
			)
		}
	}

	return (
		<div className='flex gap-10 max-w-7xl mx-auto p-6 bg-white  rounded-xl my-20'>
			<div className='flex-1'>
				<h2 className='text-2xl font-semibold text-center mb-6'>
					Registration Now
				</h2>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						type='email'
						name='email'
						required
						placeholder='Email'
						className='w-full border p-2 rounded'
						value={formData.email}
						onChange={handleChange}
					/>

					<input
						type='text'
						name='name'
						required
						placeholder='Full Name'
						className='w-full border p-2 rounded'
						value={formData.name}
						onChange={handleChange}
					/>

					<input
						type='file'
						name='PhotoURL'
						accept='image/*'
						onChange={handleImageUpload}
						className='w-full border p-2 rounded'
					/>
					{imageLoading && (
						<p className='text-sm text-gray-500'>Uploading image...</p>
					)}
					{formData.avatar && (
						<img
							src={formData.avatar}
							alt='avatar'
							className='w-20 h-20 rounded-full'
						/>
					)}

					<select
						name='bloodGroup'
						required
						className='w-full border p-2 rounded'
						value={formData.bloodGroup}
						onChange={handleChange}
					>
						<option value=''>Select Blood Group</option>
						{['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
							<option key={bg} value={bg}>
								{bg}
							</option>
						))}
					</select>

					<select
						name='district'
						required
						className='w-full border p-2 rounded'
						value={formData.district}
						onChange={handleChange}
					>
						<option value=''>Select District</option>
						{districtData.map((d, index) => (
							<option key={index} value={d.district}>
								{d.district}
							</option>
						))}
					</select>

					<select
						name='upazila'
						required
						className='w-full border p-2 rounded'
						value={formData.upazila}
						onChange={handleChange}
					>
						<option value=''>Select Upazila</option>
						{upazilas.map((u) => (
							<option key={u} value={u}>
								{u}
							</option>
						))}
					</select>

					<input
						type='password'
						name='password'
						required
						placeholder='Password'
						className='w-full border p-2 rounded'
						value={formData.password}
						onChange={handleChange}
					/>

					<input
						type='password'
						name='confirmPassword'
						required
						placeholder='Confirm Password'
						className='w-full border p-2 rounded'
						value={formData.confirmPassword}
						onChange={handleChange}
					/>

					<button
						type='submit'
						className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded'
					>
						Register
					</button>
					<p>
						Already have an account.
						<Link to='/logIn'>
							<button className='btn btn-link'>SignIn</button>
						</Link>
					</p>
				</form>
			</div>
			<div className='flex-1'>
				<Lottie animationData={Register1}></Lottie>
			</div>
		</div>
	)
}

export default Register
